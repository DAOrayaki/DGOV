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
          funding
          fee
          condition {
            id
            payouts
            resolutionTimestamp
          }
          oracle
          questionId
          outcomeSlotCount
          questionTitle
          closeTimeStamp
        }
   }
  `
  const { loading, error, data, refetch } = useQuery(MARKET_QUERY, {
    fetchPolicy: "no-cache"
  }
  )

  if (loading) return <p>Loading...</p>

  if (error) return <p>Network Error, please refresh the page</p>

  console.log(data.lmsrmarketMakers)

  const covertPayouts = (payouts: Array<string>) => {
    let result = new Array<string>(payouts.length);

    for (let i = 0; i < payouts.length; i++) {
      if (payouts[i] != '0') {
        result.push(i.toString())
      }
    }
    return result.join(',')
  }

  const convertTime = (timeStamp: string) => {
    if (timeStamp == "0") {
      return "--"
    }
    let d: Date = new Date(parseInt(timeStamp) * 1000)
    var startDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
    return startDate
  }

  const getID = (str: string) => {
    let num = str.match(/\d+\-?\d+\-?\d+/g);
    return num
  }
  const marketlist = data.lmsrmarketMakers.map(
    (data: any) =>
      <Card
        bg="light"
        key={data.id}
        text='dark'
        className="mb-8 bg-transparent border border-primary"
      >
        <Card.Body>

          <Row className="justify-content-center">
            <Col md={2}>
              {/* {data.id} */}
              {getID(data.questionTitle)}
            </Col>
            <Col md={6}>
              <Link to={`/markets/hottrendmarkets/markets/${data.id}`} key={data.id}>
                <p>{data.questionTitle}</p>
                <p>{data.condition.payouts? ("Winners: " + covertPayouts(data.condition.payouts)):("Winners: --")}</p>
              </Link>
            </Col>
            <Col md={2}>
              <p>{parseInt(data.funding) / Math.pow(10, 18)} YakID-Liquidity</p>
              <p>Open time: {convertTime(data.creationTimestamp)} </p>
              <p>Close time: {convertTime(data.closeTimeStamp)}</p>
              <p>Close time: {convertTime(data.condition.resolutionTimestamp)}</p>

            </Col>
          </Row>
        </Card.Body>

      </Card>
  )

  console.log(marketlist)


  return (
    <Container className={[styles.conditon, "mt-5", "bg-transparent"].join(' ')}>
      <h1 className="text-center">Market Lists</h1>
      {marketlist}

    </Container>
  )
}


export default MarketRoutes