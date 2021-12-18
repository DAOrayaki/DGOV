import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import loadYakiTokenRepo from "src/logic/YakiToken";
import Web3 from 'web3'


type YakiWalletProps = {
    web3: any
    account: string
    yakiAddress: string
}

let yakiTokenRepo: any

const YakiButton: React.FC<YakiWalletProps> = ({
    web3, account, yakiAddress
}) => {
    const [isYakiTokenLoaded, setIsYakiTokenLoaded] = useState<boolean>(false)
    const [tokenInfo, setTokenInfo] = useState<any>(undefined)

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
        ).toString()
        console.log(balance)

        const yakiData = {
            balance: balance,
        }

        setTokenInfo(yakiData)
    }


    return (
        <>
            {isYakiTokenLoaded && web3 ? 
            (
                <Button variant="outline-dark" className="pl-2">
                    {tokenInfo.balance} YakID
                </Button>
            )
             : (
                <div>Loading...</div>
            )}
        </>
    )
}

export default YakiButton