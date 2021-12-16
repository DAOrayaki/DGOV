import React, { useState, useEffect } from 'react'
import loadConditionalTokensRepo from 'src/logic/ConditionalTokens'
import loadMarketMakersRepo from 'src/logic/MarketMakers'
import { getConditionId, getPositionId } from 'src/utils/markets'
import BigNumber from 'bignumber.js'
import Layout from './Layout'
import { create } from 'ipfs-http-client'
import Web3 from 'web3'
// import {web3} from 'web3'
const bs58 = require('bs58')

BigNumber.config({ EXPONENTIAL_AT: 50 })

let utf8decoder = new TextDecoder()

// const markets = require('src/conf/config.local.json')

type MarketProps = {
  web3: any
  account: string
  lmsrAddress: string
  questionId: string
  outcomeCount: number
  oracle: string
  creator: string
}

enum MarketStage {
  Running = 0,
  Paused = 1,
  Closed = 2,
}

let conditionalTokensRepo: any
let marketMakersRepo: any

function getIpfsHashFromBytes32(bytes32Hex: any) {
  // Add our default ipfs values for first 2 bytes:
  // function:0x12=sha2, size:0x20=256 bits
  // and cut off leading "0x"
  const hashHex = "1220" + bytes32Hex.slice(2)
  const hashBytes = Buffer.from(hashHex, 'hex');
  const hashStr = bs58.encode(hashBytes)
  return hashStr
}

const Market: React.FC<MarketProps> = ({ web3, account, lmsrAddress, questionId, outcomeCount, oracle, creator }) => {
  const [isConditionLoaded, setIsConditionLoaded] = useState<boolean>(false)
  const [selectedAmount, setSelectedAmount] = useState<string>('')
  const [selectedOutcomeToken, setSelectedOutcomeToken] = useState<number>(0)
  const [marketInfo, setMarketInfo] = useState<any>(undefined)
  //@ts-ignore
  const client = create(process.env.REACT_APP_IPFS_ENDPOINT)
  // const client = create({
  //   host: 'localhost',
  //   port: 5001,
  //   protocol: 'http',
  //   // headers: {
  //   //   authorization: auth
  //   // }

  // })

  useEffect(() => {
    const init = async () => {
      try {
        conditionalTokensRepo = await loadConditionalTokensRepo(web3, lmsrAddress, account)
        marketMakersRepo = await loadMarketMakersRepo(web3, lmsrAddress, account)
        await getMarketInfo()
        setIsConditionLoaded(true)
      } catch (err) {
        setIsConditionLoaded(false)
        console.error(err)
      }
    }

    init()
  }, [])

  const getMarketInfo = async () => {
    if (!oracle) return
    const collateral = await marketMakersRepo.getCollateralToken()
    const conditionId = getConditionId(
      // process.env.REACT_APP_ORACLE_ADDRESS,
      oracle,
      questionId,
      outcomeCount,
    )
    const payoutDenominator = await conditionalTokensRepo.payoutDenominator(conditionId)

    // var cid = questionId.slice(0, 46)
    const cid = getIpfsHashFromBytes32(questionId)
    //@ts-ignore
    const stream = client.cat(cid)
    let data = ''

    for await (const chunk of stream) {
      // data += chunk.toString()
      data += utf8decoder.decode(chunk)
    }
    console.log(data.toString())

    var markets = JSON.parse(data)

    const outcomes = []
    for (let outcomeIndex = 0; outcomeIndex < outcomeCount; outcomeIndex++) {
      const indexSet = (outcomeIndex === 0
        ? 1
        : parseInt(Math.pow(10, outcomeIndex).toString(), 2)
      ).toString()
      const collectionId = await conditionalTokensRepo.getCollectionId(
        `0x${'0'.repeat(64)}`,
        conditionId,
        indexSet,
      )
      const positionId = getPositionId(collateral.address, collectionId)
      const probability = await marketMakersRepo.calcMarginalPrice(outcomeIndex)
      const balance = await conditionalTokensRepo.balanceOf(account, positionId)
      const payoutNumerator = await conditionalTokensRepo.payoutNumerators(
        conditionId,
        outcomeIndex,
      )

      const outcome = {
        index: outcomeIndex,
        // title: markets.markets[0].outcomes[outcomeIndex].title,
        title: markets[0].outcomes[outcomeIndex].title,
        // title: `outcome ${outcomeIndex}`,
        probability: new BigNumber(probability)
          .dividedBy(Math.pow(2, 64))
          .multipliedBy(100)
          .toFixed(2),
        balance: new BigNumber(balance).dividedBy(Math.pow(10, collateral.decimals)),
        payoutNumerator: payoutNumerator,
      }
      outcomes.push(outcome)
    }

    const marketData = {
      lmsrAddress: lmsrAddress,
      title: markets[0].title,
      outcomes,
      stage: MarketStage[await marketMakersRepo.stage()],
      questionId: questionId,
      conditionId: conditionId,
      payoutDenominator: payoutDenominator,
    }

    setMarketInfo(marketData)
  }

  const buy = async () => {
    const collateral = await marketMakersRepo.getCollateralToken()
    // const formatedAmount = new BigNumber(selectedAmount).multipliedBy(
    //   new BigNumber(Math.pow(10, collateral.decimals)),
    // ).toString()
    const formatedAmount = Web3.utils.toBN(selectedAmount).mul(Web3.utils.toBN(Math.pow(10, collateral.decimals)))

    const outcomeTokenAmounts = Array.from(
      { length: marketInfo.outcomes.length },
      (value: any, index: number) =>
        index === selectedOutcomeToken ? formatedAmount : Web3.utils.toBN(0),
    )

    console.log("Bignumber Created")

    const cost = await marketMakersRepo.calcNetCost(outcomeTokenAmounts)

    // const collateralBalance = await collateral.contract.balanceOf(account)
    const collateralBalance = await collateral.contract.allowancePoint(account, marketInfo.lmsrAddress)
    if (cost.gt(collateralBalance)) {
      // await collateral.contract.deposit({ value: formatedAmount.toString(), from: account })
      await collateral.contract.approvePoint(marketInfo.lmsrAddress, formatedAmount, {
        from: account,
      })
    }

    const tx = await marketMakersRepo.trade(outcomeTokenAmounts, cost, account)
    console.log({ tx })

    await getMarketInfo()
  }

  const sell = async () => {
    const collateral = await marketMakersRepo.getCollateralToken()
    // const formatedAmount = new BigNumber(selectedAmount).multipliedBy(
    //   new BigNumber(Math.pow(10, collateral.decimals)),
    // )
    // const formatedAmount = Web3.utils.toBN(0).sub(
    // Web3.utils.toBN(selectedAmount).mul(Web3.utils.toBN(Math.pow(10, collateral.decimals))))

    const formatedAmount = Web3.utils.toBN(selectedAmount).mul(Web3.utils.toBN(Math.pow(10, collateral.decimals)))



    const isApproved = await conditionalTokensRepo.isApprovedForAll(account, marketInfo.lmsrAddress)
    if (!isApproved) {
      await conditionalTokensRepo.setApprovalForAll(marketInfo.lmsrAddress, true, account)
    }

    const outcomeTokenAmounts = Array.from({ length: marketInfo.outcomes.length }, (v, i) =>
      i === selectedOutcomeToken ? formatedAmount.neg() : Web3.utils.toBN(0),
    )
    const profit = (await marketMakersRepo.calcNetCost(outcomeTokenAmounts)).neg()

    const tx = await marketMakersRepo.trade(outcomeTokenAmounts, profit, account)
    console.log({ tx })

    await getMarketInfo()
  }

  const redeem = async () => {
    const collateral = await marketMakersRepo.getCollateralToken()

    const indexSets = Array.from({ length: marketInfo.outcomes.length }, (v, i) =>
      i === 0 ? 1 : parseInt(Math.pow(10, i).toString(), 2),
    )

    const tx = await conditionalTokensRepo.redeemPositions(
      collateral.address,
      `0x${'0'.repeat(64)}`,
      marketInfo.conditionId,
      indexSets,
      account,
    )
    console.log({ tx })

    await getMarketInfo()
  }

  const close = async () => {
    const tx = await marketMakersRepo.close(account)
    console.log({ tx })

    await getMarketInfo()
  }

  const resolve = async (resolutionOutcomeIndex: Array<Boolean>) => {
    // const payouts = Array.from(
    //   { length: marketInfo.outcomes.length },
    //   (value: any, index: number) => (index === resolutionOutcomeIndex ? 1 : 0),
    // )
    const payouts = Array.from(
      resolutionOutcomeIndex, (value: any, index: number) => (value === true ? 1 : 0),
    )

    const tx = await conditionalTokensRepo.reportPayouts(marketInfo.questionId, payouts, account)
    console.log({ tx })

    await getMarketInfo()
  }

  const isMarketClosed =
    isConditionLoaded && MarketStage[marketInfo.stage].toString() === MarketStage.Closed.toString()
  return (
    <Layout
      account={account}
      isConditionLoaded={isConditionLoaded}
      isMarketClosed={isMarketClosed}
      marketInfo={marketInfo}
      setSelectedAmount={setSelectedAmount}
      selectedAmount={selectedAmount}
      setSelectedOutcomeToken={setSelectedOutcomeToken}
      selectedOutcomeToken={selectedOutcomeToken}
      buy={buy}
      sell={sell}
      redeem={redeem}
      close={close}
      resolve={resolve}
      oracle={oracle}
      creator={creator}
    />
  )
}

export default Market
