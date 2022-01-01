import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import loadYakiTokenRepo from "src/logic/YakiToken";
import Web3 from 'web3'


type YakiWalletProps = {
    web3: any
    account: string
    yakiAddress: string
}


type YakiButtonProps = {
    tokenInfo: any
    goWallet: any
}

const YakiButtonComp: React.FC<YakiButtonProps> = ({ tokenInfo, goWallet }) => {
    return (
        <>
                    <Button variant="outline-dark" className="pl-2 ms-4" onClick={goWallet}>
                        {`${tokenInfo.balance} YakID`}
                    </Button>
        </>
    )

}

let yakiTokenRepo: any

const YakiButton: React.FC<YakiWalletProps> = ({
    web3, account, yakiAddress
}) => {
    const [isYakiTokenLoaded, setIsYakiTokenLoaded] = useState<boolean>(false)
    const [tokenInfo, setTokenInfo] = useState<any>(undefined)
    const history = useHistory();

    console.log(yakiAddress)
    const updateTik = () => {
        if (isYakiTokenLoaded) {
            console.log('update info')
            getYakiInfo()
        }
    }

    useEffect(() => {
        const init = async () => {
            try {
                yakiTokenRepo = await loadYakiTokenRepo(web3, yakiAddress, account)
                await getYakiInfo()
                setIsYakiTokenLoaded(true)
                setInterval(updateTik, 1000)
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

    if (isYakiTokenLoaded) {

        console.log(tokenInfo.balance)
    }

    const goWallet = () => {
        history.push("/wallet")
    }

    return (
        <>
            {isYakiTokenLoaded && web3 ?
                (
                    // <Button variant="outline-dark" className="pl-2 ms-4" onClick={goWallet}>
                    //     {`${tokenInfo.balance} YakID`}
                    // </Button>
                    <YakiButtonComp tokenInfo={tokenInfo} goWallet={goWallet}></YakiButtonComp>
                )
                : (
                    <Button variant="outline-dark" className="pl-2 ms-4">
                        Loading
                    </Button>

                )}
        </>
    )
}

export default YakiButton