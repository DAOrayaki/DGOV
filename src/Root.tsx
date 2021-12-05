import React from 'react'
import App from 'src/components/App'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"


const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    // uri: "http://127.0.0.1:8000/subgraphs/name/rembern/dgovgraph",
    cache: new InMemoryCache()
});


const Root: React.FC = () => {
    return (
    <ApolloProvider client={client}>

    <App />
    </ApolloProvider>
    )
}

export default Root
