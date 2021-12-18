import React, { useState, useEffect } from 'react'
// import MarketProvider from './MarketProvider'
// import MarketLayout from './MarketLayout'
import Layout from './Layout'

type MarketProps = {
    web3: any
    account: string
}

const MarketPage: React.FC<MarketProps> = ({
    web3,
    account,
}) => {
    return (
        <>
                    <Layout web3={web3} account={account}/>
        </>
    )
}

export default MarketPage