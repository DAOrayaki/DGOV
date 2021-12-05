import React, { useState, Suspense, lazy } from 'react'
import Web3 from 'web3'
import { getWeb3Account } from 'src/utils/web3'
import {
  BrowserRouter as Router,
  // HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { ApolloProvider, useQuery, ApolloClient, InMemoryCache, gql } from "@apollo/client"
const About = lazy(() => import('src/components/childs/About'))
const Home = lazy(() => import('src/components/childs/Home'))
const Header = lazy(() => import('src/components/Header'))
const MarketProvider = lazy(() => import('src/components/MarketList'))



const App: React.FC = () => {
  const [web3, setWeb3] = useState<any>(undefined)
  const [account, setAccount] = useState<string>('')

  const setProviderData = async (provider: any) => {
    let newWeb3, newAccount
    if (provider) {
      newWeb3 = new Web3(provider)
      // newWeb3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_NETWORK!));
      // newWeb3 = new Web3(process.env.REACT_APP_NETWORK!)
      newAccount = await getWeb3Account(newWeb3)
    } else {
      // newWeb3 = null
      // newWeb3 = new Web3(new Web3.providers.HttpProvider(process.env.REACT_APP_NETWORK!));
      // newWeb3 = new Web3(process.env.REACT_APP_NETWORK!)
      // newWeb3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545');
      newWeb3 = new Web3()
      newAccount = null
    }
    setWeb3(newWeb3)
    setAccount(newAccount)
  }
  const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    // uri: "http://127.0.0.1:8000/subgraphs/name/rembern/dgovgraph",
    cache: new InMemoryCache()
  });



  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header account={account} setProviderData={setProviderData}> </Header>
      </Suspense>
      <br></br>
      <Container >
        <Row className="align-items-center">
          <Col className="text-center">
            <h1>DAOrayaki Governance 2.0: Futarchy based governance tool</h1>
          </Col>
        </Row>
        <br></br>
        <Row>
          {/* <Col className="text-center">
            <Web3ConnectButton account1={account} setProviderData={setProviderData} />
          </Col> */}

        </Row>
        <br></br>

        <Row>
          {/* <Container> */}
          <Col className="text-center">
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/markets">
                  {account && web3 ? (
                    <ApolloProvider client={client}>
                      <MarketRoutes web3={web3} account={account} />
                    </ApolloProvider>
                  ) : (
                    <div> Connect your account first </div>
                  )
                  }
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/">
                  {/* <Redirect to="/markets"></Redirect> */}
                  {account && web3 ? (
                    <ApolloProvider client={client}>
                      <MarketRoutes web3={web3} account={account} />
                    </ApolloProvider>
                  ) : (
                    <div> Connect your account first </div>
                  )
                  }

                </Route>

              </Switch>
            </Suspense>
          </Col>
          {/* </Container> */}
        </Row>

      </Container>

    </Router>
  )
}

// function Home() {
//   return <h2>Home</h2>
// }

// function About() {
//   return <h2>About</h2>
// }

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
        lmsrmarketMakers(orderBy: creationTimestamp, orderDirection: desc, first:5) {
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
    fetchPolicy: "no-cache"
  }
  )

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :</p>

  console.log(data.lmsrmarketMakers)

  const marketlist = data.lmsrmarketMakers.map(
    (data: any) =>
      <li key={data.id}>
        <Link to={`${match.url}/${data.id}`} key={data.id}>
          {data.id}
        </Link>
      </li>

  )

  console.log(marketlist)


  return (
    <div>
      <h2>Most Recently Created Markets</h2>
      <ul>
        {marketlist}
      </ul>

      <Suspense fallback={<div>Loading...</div>}>

      <Switch>
        <Route path={`${match.path}/:address`}>
          <MarketProvider web3={web3} account={account} />
        </Route>
        <Route path={match.path}>
          <h3>Please select a markets.</h3>
        </Route>
      </Switch>
      </Suspense>
    </div>
  )
}

export default App
