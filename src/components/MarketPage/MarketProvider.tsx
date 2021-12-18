import React from "react";

// import ApolloClient from "apollo-boost";
// import { ApolloProvider, useQuery } from "@apollo/react-hooks";
// import { ApolloProvider, useQuery} from "react-apollo"
import { ApolloProvider, useQuery, ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { useParams } from 'react-router-dom';
// import Market from 'src/components/Market'
import MarketLayout from './MarketLayout'


type MarketProviderProps = {
  web3: any
  account: string
  // address: string
}


const MarketProvider: React.FC<MarketProviderProps> = ({ web3, account }) => {

  //@ts-ignore
  let { address } = useParams();

  //@ts-ignore
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    // uri: "http://127.0.0.1:8000/subgraphs/name/rembern/dgovgraph",
    cache: new InMemoryCache()
  });
  return (
    //@ts-ignore
    <ApolloProvider client={client}>
      <MarketLayout web3={web3} account={account} address={address}></MarketLayout>
    </ApolloProvider>
  )

}

export default MarketProvider