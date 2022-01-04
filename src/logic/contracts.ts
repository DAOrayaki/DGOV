import React, { lazy } from 'react'



const TruffleContract = require('@truffle/contract')

let contracts: Object | undefined
let lmsrAddressCache: string | undefined
let providerAccountCache: string | undefined

const resetContracts = () => {
  contracts = undefined
  lmsrAddressCache = undefined
  providerAccountCache = undefined
}

const loadLMSRMarketMakerContract = async (web3: any) => {
  let lmsrMarketMakerContract
  if (!contracts) {
    const LMSRMarketMaker = require('../abi/LMSRMarketMaker.min.json')
    lmsrMarketMakerContract = TruffleContract(LMSRMarketMaker)
    lmsrMarketMakerContract.setProvider(web3.currentProvider)
  }
  return lmsrMarketMakerContract
}

const loadConditionalTokensContract = async (web3: any) => {
  let conditionalTokensContract
  if (!contracts) {
    const ConditionalTokens = require('../abi/ConditionalTokens.min.json')
    conditionalTokensContract = TruffleContract(ConditionalTokens)
    conditionalTokensContract.setProvider(web3.currentProvider)
  }
  return conditionalTokensContract
}

const loadWETH9Contract = async (web3: any) => {
  let weth9Contract
  if (!contracts) {
    // weth9Contract = TruffleContract(WETH9)

    const YAKI = require('../abi/YAKIID.min.json')
    weth9Contract = TruffleContract(YAKI)
    weth9Contract.setProvider(web3.currentProvider)
  }
  return weth9Contract
}

const loadContracts = async (web3: any, lmsrAddress: string, account: string) => {
  try {
    if (
      (account && account !== providerAccountCache) ||
      (lmsrAddress && lmsrAddress !== lmsrAddressCache)
    ) {
      resetContracts()
    }
    if (!contracts) {
      providerAccountCache = account
      lmsrAddressCache = lmsrAddress

      const LMSRMarketMakerContract = await loadLMSRMarketMakerContract(web3)
      const ConditionalTokensContract = await loadConditionalTokensContract(web3)
      const WETH9Contract = await loadWETH9Contract(web3)
      try {
        const lmsrMarketMaker = await LMSRMarketMakerContract.at(lmsrAddress)
        const conditionalTokens = await ConditionalTokensContract.at(await lmsrMarketMaker.pmSystem())

        const collateralToken = {
          address: await lmsrMarketMaker.collateralToken(),
          contract: await WETH9Contract.at(await lmsrMarketMaker.collateralToken()),
          name: 'YAKI TOKEN',
          decimals: 18,
          symbol: 'YAKI',
        }

        contracts = { lmsrMarketMaker, conditionalTokens, collateralToken }
      }
      catch (error) {
        console.log('error')
      }
    }
    return contracts
  } catch (err) {
    console.error(err)
    return null
  }
}

export default loadContracts
