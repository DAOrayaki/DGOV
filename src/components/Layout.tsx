import React, { useState, Suspense, lazy } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import styles from 'src/components/style.module.css'
import SpinnerPage from 'src/components/SpinnerPage'

const Header = lazy(() => import('src/components/Header'))
const YakiWallet = lazy(() => import('src/components/Yaki/index'))
const MainPage = lazy(() => import('src/components/MainPage'))
const MarketPage = lazy(() => import('src/components/MarketPage'))
const HotTrendPage = lazy(() => import('src/components/HotMarketPage'))

type LayoutProperty = {
    web3: any
    account: string
    setProviderData: any
}
const Layout: React.FC<LayoutProperty> = ({
    web3,
    account,
    setProviderData
}) => {

    return (
        <Router>

            <div className={styles.headerBar}>
                <Suspense fallback={SpinnerPage}>
                    <Header web3={web3} account={account} setProviderData={setProviderData}> </Header>
                </Suspense>
            </div>
            <div className={styles.mainContent}>
                <Suspense fallback={SpinnerPage}>
                    <Switch>
                        <Route path="/markets/research">
                            <MarketPage web3={web3} account={account}></MarketPage>
                        </Route>
                        <Route path="/markets/hottrend">
                            <HotTrendPage web3={web3} account={account}></HotTrendPage>
                        </Route>

                        <Route path="/wallet">
                            {account && web3 ? (

                                //@ts-ignore
                                <YakiWallet web3={web3} account={account} yakiAddress={process.env.REACT_APP_YAKI_ADDRESS} />
                            ) : (
                                <>
                                    <h1 className="text-center">
                                        Connect your account first</h1>
                                </>
                            )

                            }
                        </Route>
                        <Route path="/">
                            <MainPage />
                        </Route>

                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}
export default Layout