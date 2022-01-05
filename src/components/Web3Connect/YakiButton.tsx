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
    isError: boolean
    networkId: string

}

const YakiButtonComp: React.FC<YakiButtonProps> = ({ tokenInfo, goWallet, isError, networkId }) => {
    return (
        <>
            {!isError ? (<Button variant="outline-dark" className="pl-2 ms-4" onClick={goWallet}>
                {`${tokenInfo.balance} YakID`}
            </Button>) : (
                <Button variant="danger" className="pl-2 ms-4" onClick={goWallet}>
                    {`Wrong network : ${networkId}`}
                </Button>
            )
            }
        </>
    )

}

let yakiTokenRepo: any

const YakiButton: React.FC<YakiWalletProps> = ({
    web3, account, yakiAddress
}) => {
    const [isYakiTokenLoaded, setIsYakiTokenLoaded] = useState<boolean>(false)
    const [tokenInfo, setTokenInfo] = useState<any>(undefined)
    const [networkId, setNetworkId] = useState<string>("")
    const [isError, setIsError] = useState<boolean>(false)
    const history = useHistory();

    console.log(yakiAddress)
    const updateTik = () => {
        if (yakiTokenRepo) {

            console.log('update info')
            getYakiInfo()
        } else {
            console.log('yaki not loaded update')
        }
    }
    // setInterval(updateTik, 1000)
    var intId: any

    useEffect(() => {

        const init = async () => {
            try {

                const networkType = await web3.eth.net.getNetworkType()
                yakiTokenRepo = await loadYakiTokenRepo(web3, yakiAddress, account)
                setNetworkId(networkType)
                await getYakiInfo()
                setIsYakiTokenLoaded(true)
                setIsError(false)
            } catch (err) {
                setIsYakiTokenLoaded(false)
                setIsError(true)
                console.error(err)
            }
        }

        init().then(() => {
            // if (intId) {
            // clearInterval(intId)
            // }
            intId = setInterval(updateTik, 1000)
        })
        return () => {
            clearInterval(intId)
        }
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
                    <YakiButtonComp tokenInfo={tokenInfo} goWallet={goWallet}
                        isError={isError} networkId={networkId}></YakiButtonComp>
                )
                : (
                    web3 && isError ? (
                        <YakiButtonComp tokenInfo={tokenInfo} goWallet={goWallet}
                            isError={isError} networkId={networkId}></YakiButtonComp>


                    ) : (
                        <Button variant="outline-dark" className="pl-2 ms-4">
                            Loading
                        </Button>

                    )

                )}
        </>
    )
}

export default YakiButton