import React, { useState, Suspense, lazy } from 'react'
import Web3 from 'web3'
import { getWeb3Account } from 'src/utils/web3'

import Layout from 'src/components/Layout'
import bg from 'src/images/bg.svg'

var setionStyle = {
  backgroundImage: `url(${bg})`,
  backgroundSize: `100% 100%`
}

const App: React.FC = () => {
  const [web3, setWeb3] = useState<any>(undefined)
  const [account, setAccount] = useState<string>('')

  const setProviderData = async (provider: any) => {
    let newWeb3, newAccount
    if (provider) {
      newWeb3 = new Web3(provider)
      newAccount = await getWeb3Account(newWeb3)
    } else {
      newWeb3 = new Web3()
      newAccount = null
    }
    setWeb3(newWeb3)
    setAccount(newAccount)
  }



  return (
    <>
      <div style={setionStyle}>
        <Layout web3={web3} account={account} setProviderData={setProviderData} ></Layout>
      </div>
    </>
  )
}

export default App
