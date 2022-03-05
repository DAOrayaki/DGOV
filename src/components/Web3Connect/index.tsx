import React, { useEffect, useState } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import {
  useWallet,
  UseWalletProvider as UseWalletP,
  ConnectionRejectedError
} from 'use-wallet'
import { DropdownButton, Dropdown, Button, Container, Row, Col } from 'react-bootstrap'
import YakiButton from 'src/components/Web3Connect/YakiButton'
// import detectEthereumProvider from '@metamask/detect-provider';
// import bsc from '@binance-chain/bsc-use-wallet'
import {
  BscConnector,
  UserRejectedRequestError,
} from '@binance-chain/bsc-connector'


type Props = {
  web3: any
  account1: string
  setProviderData: Function
}

let web3ConnectListenersAdded = false

const networks = {
  polygon: {
    chainId: `0x${Number(137).toString(16)}`,
    chainName: "Polygon Mainnet",
    nativeCurrency: {
      name: "MATIC",
      symbol: "MATIC",
      decimals: 18
    },
    rpcUrls: ["https://polygon-rpc.com/"],
    blockExplorerUrls: ["https://polygonscan.com/"]
  },
  bsc: {
    chainId: `0x${Number(56).toString(16)}`,
    chainName: "Binance Smart Chain Mainnet",
    nativeCurrency: {
      name: "Binance Chain Native Token",
      symbol: "BNB",
      decimals: 18
    },
    rpcUrls: [
      "https://bsc-dataseed1.binance.org",
      "https://bsc-dataseed2.binance.org",
      "https://bsc-dataseed3.binance.org",
      "https://bsc-dataseed4.binance.org",
      "https://bsc-dataseed1.defibit.io",
      "https://bsc-dataseed2.defibit.io",
      "https://bsc-dataseed3.defibit.io",
      "https://bsc-dataseed4.defibit.io",
      "https://bsc-dataseed1.ninicoin.io",
      "https://bsc-dataseed2.ninicoin.io",
      "https://bsc-dataseed3.ninicoin.io",
      "https://bsc-dataseed4.ninicoin.io",
      "wss://bsc-ws-node.nariox.org"
    ],
    blockExplorerUrls: ["https://bscscan.com"]
  }
};

//@ts-ignore
const changeNetwork = async ({ networkName, setError }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    //@ts-ignore
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          //@ts-ignore
          ...networks[networkName]
        }
      ]
    });
  } catch (err: any) {
    //@ts-ignore
    setError(err.message);
  }
};


const Web3ConnectButton: React.FC<Props> = ({ web3, account1, setProviderData }) => {
  const connectProvider = (provider: any) => setProviderData(provider)
  const disconnectProvider = () => setProviderData()
  const { account, connect, reset, status } = useWallet()
  const [loginStage, setLoginStage] = useState<boolean>(false)
  const itemKey = 'dgov-login-state'
  const [error, setError] = useState<boolean>();

  const handleNetworkSwitch = async (networkName: any) => {
    setError(false);
    await changeNetwork({ networkName, setError });
  };


  useEffect(() => {
    if (!web3ConnectListenersAdded) {
      web3ConnectListenersAdded = true
    }
    const login_state = localStorage.getItem(itemKey)
    if (login_state == '0' && !loginStage) {
      connectMetamask()
    } else if (login_state == '1' && loginStage) {
      resetMetamask()
    }
  })

  const resetMetamask = async () => {
    reset()
    disconnectProvider()
    localStorage.setItem(itemKey, '1')
    setLoginStage(false)
  }

  const connectMetamask = async () => {

    //@ts-ignore
    connect("bsc").then(() => {
      detectEthereumProvider().then((result) => {
        if (result) {
          //@ts-ignore
          connectProvider(result)
        }
      })
    })

    localStorage.setItem(itemKey, '0')
    setLoginStage(true)
  }


  return account1 ? (
    <>
      <Container>
        {/* <Row> */}
        <Row>
          <Col md={4}>
            <DropdownButton id="dropdown-item-button" title={account1.slice(0, 4) + "..." + account1.slice(-4)} variant="secondary" className="me-5">
              {/* <Dropdown.ItemText>{account1}</Dropdown.ItemText> */}
              <Dropdown.Item as="button" onClick={() => resetMetamask()}>Disconnect  </Dropdown.Item>
            </DropdownButton>
          </Col>
          {/* </Row> */}
          {/* <Row className="mt-2"> */}
          <Col md={7}>
            {/* @ts-ignore */}
            <YakiButton web3={web3} account={account1} yakiAddress={process.env.REACT_APP_YAKI_ADDRESS} disconnect={disconnectProvider} changeNetwork={() => handleNetworkSwitch('bsc')}></YakiButton>
          </Col>
          {/* </Row> */}
        </Row>
      </Container>
    </>

  ) : (
    <Button variant="secondary" onClick={connectMetamask}>
      Connect
    </Button>
  )
}

export default Web3ConnectButton

// const Web3WalletProvider: React.FC<Props> = ({ web3, account1, setProviderData }) => {

//   return (
//     <UseWalletP
//       connectors={{
//         //@ts-ignore
//         bsc: {
//           web3ReactConnector() {
//             return new BscConnector({ supportedChainIds: [56, 97] })
//           },
//           handleActivationError(err: any) {
//             if (err instanceof UserRejectedRequestError) {
//               return new ConnectionRejectedError()
//             }
//           },
//         },
//       }}
//     >
//       <Web3ConnectButton account1={account1} setProviderData={setProviderData} web3={web3} />
//     </UseWalletP>
//   )
// }

// export default Web3WalletProvider