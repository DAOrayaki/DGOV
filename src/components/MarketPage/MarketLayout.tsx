import React, { useState, Suspense, lazy } from "react";
import { ApolloProvider, useQuery, ApolloClient, InMemoryCache, gql } from "@apollo/client"
import SpinnerPage from "../SpinnerPage";
// import Market from 'src/components/Market'
const Market = lazy(() => import('src/components/Market/index'))

type MarketProps = {
    web3: any
    account: string
    address: string
}


const MarketLayout: React.FC<MarketProps> = ({ web3, account, address }) => {



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
          questionType
        }
   }
  `
    const { loading, error, data, refetch } = useQuery(MARKET_QUERY, {
        variables: { 'id': address.toLowerCase() },
        fetchPolicy: "no-cache"
    }
    )
    console.log(address)

    if (loading) return <SpinnerPage />

    if (error) return <p>Error :</p>
    const lmsrmarketMaker = data.lmsrmarketMaker
    let d: Date = new Date(Date.now())
    if (lmsrmarketMaker) {
        d = new Date(parseInt(lmsrmarketMaker.creationTimestamp) * 1000);
    }

    return (
        //@ts-ignore
        <div>
            {data.lmsrmarketMaker ? (
                <>
                    <Suspense fallback={<h1 className="text-center">Loading...</h1>}>
                        <Market
                            web3={web3}
                            account={account}
                            lmsrAddress={address}
                            questionId={data.lmsrmarketMaker.questionId}
                            outcomeCount={data.lmsrmarketMaker.outcomeSlotCount}
                            oracle={data.lmsrmarketMaker.oracle}
                            creator={data.lmsrmarketMaker.creator}
                            createTime={d}
                            questionType={data.lmsrmarketMaker.questionType}
                        />

                    </Suspense>
                </>
            ) : (
                // <div>No data found</div>
                <h1 className="text-center">
                    No data found</h1>
            )}
            {/* <p>{data.lmsrmarketMaker.id}</p> */}
            {/* <button onClick={() => refetch()}>Refetch!</button> */}
        </div>
    )

}

export default MarketLayout
