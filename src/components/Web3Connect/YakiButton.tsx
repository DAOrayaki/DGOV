import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import loadYakiTokenRepo from "src/logic/YakiToken";
import BigNumber from 'bignumber.js'
import Web3 from 'web3'


type YakiWalletProps = {
    web3: any
    account: string
    yakiAddress: string
    disconnect: any
    changeNetwork: any
}


type YakiButtonProps = {
    tokenInfo: any
    goWallet: any
    isError: boolean
    networkId: string

}

const YakiButtonComp: React.FC<YakiButtonProps> = ({ tokenInfo, goWallet, isError, networkId }) => {

    const getNetwork = (netId: string) => {
        let netIdName, explorerUrl;
        switch (netId.toString()) {
            case "1":
                netIdName = 'Foundation'
                explorerUrl = 'https://etherscan.io'
                console.log('This is Foundation', netId)
                break;
            case "3":
                netIdName = 'Ropsten'
                explorerUrl = 'https://ropsten.etherscan.io'
                console.log('This is Ropsten', netId)
                break;
            case "4":
                netIdName = 'Rinkeby'
                explorerUrl = 'https://rinkeby.etherscan.io'
                console.log('This is Rinkeby', netId)
                break;
            case "42":
                netIdName = 'Kovan'
                explorerUrl = 'https://kovan.etherscan.io'
                console.log('This is Kovan', netId)
                break;
            case "99":
                netIdName = 'POA Core'
                explorerUrl = 'https://poaexplorer.com'
                console.log('This is Core', netId)
                break;
            case "77":
                netIdName = 'POA Sokol'
                explorerUrl = 'https://sokol.poaexplorer.com'
                console.log('This is Sokol', netId)
                break;
            case "56":
                netIdName = 'BSC'
                explorerUrl = 'https://bscscan.com'
                console.log('This is BSC', netId)
                break;
            case "137":
                netIdName = 'Matic Network'
                explorerUrl = 'https://polygonscan.com/'
                console.log('This is Polygon', netId)
                break;
            default:
                netIdName = 'Unknown'
                console.log('This is an unknown network.', netId)
        }

        // return netIdName, explorerUrl;
        return netIdName
    }

    return (
        <>
            {!isError ? (<Button variant="outline-dark" className="pl-2 ms-4" onClick={goWallet}>
                {`${tokenInfo.balance} YakID`}
            </Button>) : (
                <>
                <p className="text-danger">{`Wrong network : ${getNetwork(networkId)}`}</p>
                <p>
                <Button variant="danger" className="pl-2 ms-4" onClick={goWallet}>
                    Switch to BSC
                </Button>
                </p>
                </>
            )
            }
        </>
    )

}

let yakiTokenRepo: any

const YakiButton: React.FC<YakiWalletProps> = ({
    web3, account, yakiAddress, disconnect, changeNetwork
}) => {
    const [isYakiTokenLoaded, setIsYakiTokenLoaded] = useState<boolean>(false)
    const [tokenInfo, setTokenInfo] = useState<any>(undefined)
    const [networkId, setNetworkId] = useState<string>("")
    const [isError, setIsError] = useState<boolean>(false)
    const history = useHistory();

    // console.log(yakiAddress)
    const updateTik = () => {
        if (yakiTokenRepo) {
            // console.log('update info')
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

                // const networkType = await web3.eth.net.getNetworkType()
                const networkType = await web3.eth.net.getId() // get the network id
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
        // const balance = Web3.utils.toBN(balanceAmount).div(
        //     Web3.utils.toBN(Math.pow(10, decimals))
        // ).toString()
        const balance = new BigNumber(balanceAmount).dividedBy(Math.pow(10, decimals)).toFixed(3)
        // console.log(balance)

        const yakiData = {
            balance: balance,
        }

        setTokenInfo(yakiData)

    }

    // if (isYakiTokenLoaded) {

    //     console.log(tokenInfo.balance)
    // }

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
                        <YakiButtonComp tokenInfo={tokenInfo} goWallet={() => { changeNetwork(); disconnect() }}
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