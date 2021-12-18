import React, { useState, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';

import { ApolloProvider, useQuery, ApolloClient, InMemoryCache, gql } from "@apollo/client"
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from '../style.module.css'

const MarketProvider = lazy(() => import('src/components/HotMarketPage/MarketProvider'))

type MarketProps = {
  web3: any
  account: string
  // address: string
}

const MarketRoutes: React.FC<MarketProps> = ({ web3, account }) => {
  // function MarketRoutes() {
  let match = useRouteMatch();

  const MARKET_QUERY = gql`
    query lsmrMarkets($id: String) {
        lmsrmarketMakers(orderBy: creationTimestamp, orderDirection: desc, first:10, where:{questionType: 1}) {
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
          questionTitle
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

  const convertTime = (timeStamp: string) => {
    let d: Date = new Date(parseInt(timeStamp) * 1000)
    var startDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() 
    return startDate
  }

  const marketlist = data.lmsrmarketMakers.map(
    (data: any) =>
      <Card
        bg="light"
        key={data.id}
        text='dark'
        className="mb-8"
      >
        <Card.Body>

          <Row>
            <Col md={4}>
              {data.id}
            </Col>
            <Col md={6}>
              <Link to={`/markets/hottrendmarkets/markets/${data.id}`} key={data.id}>
                <p>{data.questionTitle}</p>
              </Link>
            </Col>
            <Col md={2}>
              <p>{parseInt(data.funding) / Math.pow(10, 18)} YakID-Liquidity</p>
              <p>Open time: {convertTime(data.creationTimestamp)} </p>
            </Col>
          </Row>
        </Card.Body>

      </Card>
    // <li key={data.id}>
    //   <Link to={`/markets/researchmarkets/markets/${data.id}`} key={data.id}>
    //     {data.id}
    //   </Link>
    // </li>

  )

  console.log(marketlist)


  return (
    <Container className={[styles.conditon, "mt-5"].join(' ')}>
      <h1  className="text-center">Market Lists</h1>
      {marketlist}

    </Container>
  )
}


export default MarketRoutes