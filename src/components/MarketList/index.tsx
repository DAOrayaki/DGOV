import React, { useMemo } from "react";
import { render } from "react-dom";

// import ApolloClient from "apollo-boost";
// import { ApolloProvider, useQuery } from "@apollo/react-hooks";
// import { ApolloProvider, useQuery} from "react-apollo"
import { ApolloProvider, useQuery, ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { useParams } from 'react-router-dom';
import Market from 'src/components/Market'


type MarketProviderProps = {
  web3: any
  account: string
  // address: string
}

type MarketProps = {
  web3: any
  account: string
  address: string
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
    <ApolloProvider client={client}>
      <MarketList web3={web3} account={account} address={address}></MarketList>
    </ApolloProvider>
  )

}

const MarketList: React.FC<MarketProps> = ({ web3, account, address }) => {



  const MARKET_QUERY = gql`
    query lsmrMarkets($id: String) {
        lmsrmarketMaker(id: $id) {
          id
          creator
          creationTimestamp
          collateralToken
          conditions {
            id
            oracle
            questionId
            outcomeSlotCount
          }
          funding
          fee
          condition {
            id
          }
          oracle
          questionId
          outcomeSlotCount
        }
   }
  `
  const { loading, error, data, refetch } = useQuery(MARKET_QUERY, {
    variables: { 'id': address.toLowerCase() },
    fetchPolicy: "no-cache"
  }
  )
  console.log(address)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :</p>

  return (
    //@ts-ignore
    <div>
      {data.lmsrmarketMaker ? (
        <>
          <Market
            web3={web3}
            account={account}
            lmsrAddress={address}
            questionId={data.lmsrmarketMaker.questionId}
            outcomeCount={data.lmsrmarketMaker.outcomeSlotCount}
            oracle={data.lmsrmarketMaker.oracle}
            creator={data.lmsrmarketMaker.creator} />
        </>
       ) : ( 
         <div>No data found</div> 
       )} 
      {/* <p>{data.lmsrmarketMaker.id}</p> */}
      {/* <button onClick={() => refetch()}>Refetch!</button> */}
    </div>
  )

}

export default MarketProvider
