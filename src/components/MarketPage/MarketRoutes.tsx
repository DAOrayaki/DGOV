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
import SpinnerPage from 'src/components/SpinnerPage'

const MarketProvider = lazy(() => import('src/components/MarketPage/MarketProvider'))

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
        lmsrmarketMakers(orderBy: creationTimestamp, orderDirection: desc, first:10, where:{questionType: 0}) {
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

  if (loading) return <SpinnerPage />

  if (error) return <p>Error :</p>

  console.log(data.lmsrmarketMakers)

  const covertPayouts = (payouts: Array<string>) => {
    let result = new Array<string>();
    // let result = payouts.filter((e, i, a)=>{return e!="0"})

    for (let i = 0; i < payouts.length; i++) {
      if (payouts[i] != '0') {
        result.push(i.toString())
        console.log(payouts[i])
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
              <Link to={`/markets/research/markets/${data.id}`} key={data.id}>
                <p>{data.questionTitle}</p>
              </Link>
                <p className="text-muted">{data.condition.payouts ? ("Winners: " + covertPayouts(data.condition.payouts)) : ("Winners: Not Decided Yet")}</p>
            </Col>
            <Col md={3}>
              <p className="mb-0 text-muted">{parseInt(data.funding) / Math.pow(10, 18)} YakID-Liquidity</p>
              <p className="mb-0 text-muted">Open time: {convertTime(data.creationTimestamp)} </p>
              <p className="mb-0 text-muted">Close time: {convertTime(data.closeTimeStamp)}</p>
              <p className="mb-0 text-muted">Resolve time: {convertTime(data.condition.resolutionTimestamp)}</p>
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
    <Container className={[styles.conditon, "mt-5", "justify-content-center"].join(' ')}>
      <h1 className="text-center">Market Lists</h1>
      <Col xs sm lg="12">
        {marketlist}
      </Col>
    </Container>
  )
}


export default MarketRoutes