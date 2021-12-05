import React from 'react'
import ReactDOM from 'react-dom'
import Root from './Root'
import * as serviceWorker from './serviceWorker'
import {
    UseWalletProvider,
} from 'use-wallet'
import "bootstrap/dist/css/bootstrap.css"; // Import precompiled Bootstrap css
// import "@fortawesome/fontawesome-free/css/all.css";
// import { ApolloProvider, useQuery, ApolloClient, InMemoryCache, gql } from "@apollo/client"


// const client = new ApolloClient({
//     uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
//     // uri: "http://127.0.0.1:8000/subgraphs/name/rembern/dgovgraph",
//     cache: new InMemoryCache()
// });


ReactDOM.render(

    // <ApolloProvider client={client}>
    //@ts-ignore
        <UseWalletProvider>
            <Root />
        </UseWalletProvider>

    // </ApolloProvider>
    , document.getElementById('root'))

// ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
