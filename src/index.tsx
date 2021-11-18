import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
import {
    BscConnector,
    UserRejectedRequestError,
} from '@binance-chain/bsc-connector'

import {
    ConnectionRejectedError,
    useWallet,
    UseWalletProvider,
} from 'use-wallet'


ReactDOM.render(
    <UseWalletProvider
        connectors={{
            //@ts-ignore
            bsc: {
                web3ReactConnector() {
                    return new BscConnector({ supportedChainIds: [56, 97] })
                },
                //@ts-ignore
                handleActivationError(err) {
                    if (err instanceof UserRejectedRequestError) {
                        return new ConnectionRejectedError()
                    }
                },
            },
        }}
    >
        <Root />
    </UseWalletProvider>
    , document.getElementById('root'))

// ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
