import React from "react";
import { ApolloProvider, useQuery, ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { useParams } from 'react-router-dom';
import MarketLayout from './MarketLayout'
// const Market = lazy(() => import('src/components/Market/index'))
import Market from 'src/components/Market'



type MarketProviderProps = {
    web3: any
    account: string
}


const CurrentMarketProvider: React.FC<MarketProviderProps> = ({ web3, account }) => {

    //@ts-ignore
    // let { address } = useParams();

    //@ts-ignore
    const client = new ApolloClient({
        uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
        // uri: "http://127.0.0.1:8000/subgraphs/name/rembern/dgovgraph",
        cache: new InMemoryCache()
    });
    return (
        <ApolloProvider client={client}>
            {account && web3 ? (
                <CurrentMarket web3={web3} account={account}></CurrentMarket>) : (
                <div> Connect your account first </div>
            )
            }
        </ApolloProvider>
    )

}



const CurrentMarket: React.FC<MarketProviderProps> = ({ web3, account }) => {

    const MARKET_QUERY = gql`
    query lsmrMarkets($id: String) {
        lmsrmarketMakers(orderBy: creationTimestamp, orderDirection: desc, first:1, where:{questionType: 0}) {
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
          questionType
        }
   }
  `
    const { loading, error, data, refetch } = useQuery(MARKET_QUERY, {
        fetchPolicy: "no-cache"
    }
    )

    if (loading) return <p>Loading...</p>

    if (error) return <p>Error :</p>

    console.log(data.lmsrmarketMakers)

    const lmsrmarketMaker = data.lmsrmarketMakers[0]
    let d: Date = new Date(Date.now())
    if (lmsrmarketMaker) {
        d = new Date(parseInt(lmsrmarketMaker.creationTimestamp) * 1000);
    }
    // let d: Date = new Date(parseInt(lmsrmarketMaker.creationTimestamp) * 1000);  
    // var datestring = d.getDate()  + "-" + (d.getMonth()+1) + "-" + d.getFullYear() + " " +d.getHours() + ":" + d.getMinutes()
    // console.log(datestring)
    // console.trace()

    return (
        <>
            {lmsrmarketMaker ? (
                <>
                    <Market
                        web3={web3}
                        account={account}
                        lmsrAddress={lmsrmarketMaker.id}
                        questionId={lmsrmarketMaker.questionId}
                        outcomeCount={lmsrmarketMaker.outcomeSlotCount}
                        oracle={lmsrmarketMaker.oracle}
                        creator={lmsrmarketMaker.creator}
                        questionType={lmsrmarketMaker.questionType}
                        createTime={d} />
                </>
            ) : (
                <h1 className="text-center">No data found</h1>
            )}
        </>
    )
}


export default CurrentMarketProvider