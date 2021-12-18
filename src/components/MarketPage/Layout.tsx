import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

import SubHeader from 'src/components/MarketPage/SubHeader'
import styles from 'src/components/style.module.css'

const CurrentMarket = lazy(() => import('src/components/MarketPage/CurrentMarket'))
const MarketProvider = lazy(() => import('src/components/MarketPage/MarketProvider'))
const MarketLists = lazy(() => import('src/components/MarketPage/MarketRoutes'))


type LayoutProps = {
    web3: any
    account: string
}

const Layout: React.FC<LayoutProps> = ({
    web3,
    account
}) => {
    let match = useRouteMatch()

    return (
        <>
            <div className={styles.mainBar}>
                <SubHeader></SubHeader>
            </div>
            {account && web3 ? (
                <>
                    <Suspense fallback={<div>Loading...</div>}></Suspense>
                    <div className="mainContainer">
                        <Switch>
                            <Route path={`${match.path}/current`}>
                                <CurrentMarket web3={web3} account={account}></CurrentMarket>
                            </Route>
                            <Route path={`${match.path}/marketlist`}>

                                <MarketLists web3={web3} account={account}></MarketLists>
                            </Route>
                            <Route path={`${match.path}/markets/:address`}>
                                <MarketProvider web3={web3} account={account} />
                            </Route>
                            <Route path={match.path}>
                                <h3>Please select a markets.</h3>
                            </Route>
                        </Switch>
                    </div>
                </>
            ) : (
                <div> Connect your account first </div>
            )
            }

        </>
    )
}

export default Layout