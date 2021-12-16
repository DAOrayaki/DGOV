import React, { useState, useEffect } from "react";
import loadYakiTokenRepo from "src/logic/YakiToken";
import Layout from './Layout'
import Web3 from 'web3'


type YakiWalletProps = {
    web3: any
    account: string
    yakiAddress: string
}

let yakiTokenRepo: any

const YakiWallet: React.FC<YakiWalletProps> = ({
    web3, account, yakiAddress
}) => {
    const [isYakiTokenLoaded, setIsYakiTokenLoaded] = useState<boolean>(false)
    const [selectedAmount, setSelectedAmount] = useState<string>('')
    const [tokenInfo, setTokenInfo] = useState<any>(undefined)
    const [recipient, setRecipient] = useState<string>('')

    console.log(yakiAddress)

    useEffect(() => {
        const init = async () => {
            try {
                yakiTokenRepo = await loadYakiTokenRepo(web3, yakiAddress, account)
                await getYakiInfo()
                setIsYakiTokenLoaded(true)
            } catch (err) {
                setIsYakiTokenLoaded(false)
                console.error(err)
            }
        }

        init()
    }, [])

    const getYakiInfo = async () => {
        const decimals = await yakiTokenRepo.decimals()
        const balanceAmount = await yakiTokenRepo.pointBanlanceOf(account)
        const balance = Web3.utils.toBN(balanceAmount).div(
            Web3.utils.toBN(Math.pow(10, decimals))
        )
        const symbol = await yakiTokenRepo.symbol()
        const name = await yakiTokenRepo.name()

        const yakiData = {
            balance: balance,
            symbol: symbol,
            name: name,
            decimals: decimals
        }

        setTokenInfo(yakiData)
    }

    const transform = async () => {
        const formatedAmount = Web3.utils.toBN(selectedAmount).mul(Web3.utils.toBN(Math.pow(10, tokenInfo.decimals)))

        const tx = await yakiTokenRepo.transferPoint(recipient, formatedAmount, account)

        console.log({ tx })

        await getYakiInfo()
    }

    return (
        <>
            {isYakiTokenLoaded ? (<Layout
                account={account}
                tokenSymbol={tokenInfo.symbol}
                tokenAmount={tokenInfo.balance}
                setSelectedAmount={setSelectedAmount}
                selectedAmount={selectedAmount}
                setRecipient={setRecipient}
                transform={transform}
                isYakiTokenLoaded={isYakiTokenLoaded}
            />) : (
                <div>Loading...</div>
            )}
        </>
    )
}

export default YakiWallet