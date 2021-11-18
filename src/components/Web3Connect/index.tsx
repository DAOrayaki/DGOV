import React, { useEffect } from 'react'
import Web3Connect from 'web3connect'
import Button from '@material-ui/core/Button'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { getCurrentNetworkName } from 'src/utils/web3'
import styles from '../style.module.css'
import Fortmatic from "fortmatic"
import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider'
import {
  BscConnector,
  UserRejectedRequestError
} from '@binance-chain/bsc-connector'
import {
  ConnectionRejectedError,
  useWallet,
  UseWalletProvider
} from 'use-wallet'


type Props = {
  account1: string
  setProviderData: Function
}

let web3ConnectListenersAdded = false


const Web3ConnectButton: React.FC<Props> = ({ account1, setProviderData }) => {
  const connectProvider = (provider: any) => setProviderData(provider)
  const disconnectProvider = () => setProviderData()
  const { account, connect, reset, status } = useWallet()

  useEffect(() => {
    if (!web3ConnectListenersAdded) {
      web3ConnectListenersAdded = true
    }
  })

  const connectMetamask = async () => {
    //@ts-ignore
    connect('bsc')
    // const provider = await detectEthereumProvider()
    // const provider = <window className="bin</window>
    //@ts-ignore
    const provider = window.BinanceChain

    if (provider) {
      // if (provider !== window.ethereum) {
        // console.log('Do you have multiple wallets installed?')
      // }
      connectProvider(provider)
    }

  }

  const getTypeOfAccount = () => {
    let type: string
    if (account1 === process.env.REACT_APP_OPERATOR_ADDRESS) {
      type = 'Operator'
    } else if (account1 === process.env.REACT_APP_ORACLE_ADDRESS) {
      type = 'Oracle'
    } else {
      type = 'Trader'
    }
    return type
  }

  return account1 ? (
    // <UseWalletProvider
    //   connectors={{
    //     //@ts-ignore
    //     bsc: {
    //       web3ReactConnector() {
    //         return new BscConnector({ supportedChainIds: [56, 97] })
    //       },
    //       //@ts-ignore
    //       handleActivationError(err: Error) {
    //         if (err instanceof UserRejectedRequestError) {
    //           return new ConnectionRejectedError()
    //         }
    //       },
    //     },
    //   }}
    // >
      <div className={styles.header}>
        <div className={styles.bold}>{getTypeOfAccount()}:</div>
        <div>{account1}</div>
        <div>
          <Button variant="contained" onClick={() => reset()}>
            Disconnect
          </Button>
        </div>
      </div>
    // </UseWalletProvider>
  ) : (
    // <UseWalletProvider
    //   connectors={{
    //     //@ts-ignore
    //     bsc: {
    //       web3ReactConnector() {
    //         return new BscConnector({ supportedChainIds: [56, 97] })
    //       },
    //       //@ts-ignore
    //       handleActivationError(err) {
    //         if (err instanceof UserRejectedRequestError) {
    //           return new ConnectionRejectedError()
    //         }
    //       },
    //     },
    //   }}
    // >
      <Button variant="contained" onClick={connectMetamask}>
        Connect
      </Button>
    // </UseWalletProvider>
  )
}

export default Web3ConnectButton
