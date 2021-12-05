import React, { useEffect } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import {
  useWallet,
} from 'use-wallet'
import { DropdownButton, Dropdown, Button } from 'react-bootstrap'
// import detectEthereumProvider from '@metamask/detect-provider';


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

  const resetMetamask = async () => {
    reset()
    disconnectProvider()
  }

  const connectMetamask = async () => {
    //@ts-ignore
    // connect('bsc')
    connect()
    // const provider = await detectEthereumProvider()
    // const provider = <window className="bin</window>

    //this is only for bsc
    //@ts-ignore
    // const provider = window.BinanceChain

    const provider = await detectEthereumProvider();

    if (provider) {
      // if (provider !== window.ethereum) {
      // console.log('Do you have multiple wallets installed?')
      // }
      connectProvider(provider)
    }

  }

  // const getTypeOfAccount = () => {
  //   let type: string
  //   if (account1 === process.env.REACT_APP_OPERATOR_ADDRESS) {
  //     type = 'Operator'
  //   } else if (account1 === process.env.REACT_APP_ORACLE_ADDRESS) {
  //     type = 'Oracle'
  //   } else {
  //     type = 'Trader'
  //   }
  //   return type
  // }

  return account1 ? (
    // <Button variant="contained" onClick={() => resetMetamask()}>
    //   Disconnect {account1}
    // </Button>
    <DropdownButton id="dropdown-item-button" title="Account" variant="secondary">
      <Dropdown.ItemText>{account1}</Dropdown.ItemText>
      <Dropdown.Item as="button" onClick={() => resetMetamask()}>Disconnect</Dropdown.Item>
    </DropdownButton>
  ) : (
    <Button variant="secondary" onClick={connectMetamask}>
      Connect
    </Button>
  )
}

export default Web3ConnectButton
