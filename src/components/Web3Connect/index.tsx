import React, { useEffect, useState } from 'react'
import detectEthereumProvider from '@metamask/detect-provider'
import {
  useWallet,
} from 'use-wallet'
import { DropdownButton, Dropdown, Button, Container, Row, Col } from 'react-bootstrap'
import YakiButton from 'src/components/Web3Connect/YakiButton'
// import detectEthereumProvider from '@metamask/detect-provider';


type Props = {
  web3: any
  account1: string
  setProviderData: Function
}

let web3ConnectListenersAdded = false


const Web3ConnectButton: React.FC<Props> = ({ web3, account1, setProviderData }) => {
  const connectProvider = (provider: any) => setProviderData(provider)
  const disconnectProvider = () => setProviderData()
  const { account, connect, reset, status } = useWallet()
  const [loginStage, setLoginStage] = useState<boolean>(false)
  const itemKey = 'dgov-login-state'

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
    // connect('bsc')
    connect().then(() => {
      detectEthereumProvider().then((result) => {
        if (result) {
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
            <YakiButton web3={web3} account={account1} yakiAddress={process.env.REACT_APP_YAKI_ADDRESS}></YakiButton>
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
