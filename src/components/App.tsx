import React, { useState } from 'react'
import Web3 from 'web3'
import Web3ConnectButton from 'src/components/Web3Connect'
// import MarketProvider from 'src/components/Market'
import { getWeb3Account } from 'src/utils/web3'
import styles from './style.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import MarketProvider from 'src/components/MarketList'


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

  return (
    <Router>
    <div className={styles.container}>
      <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about"> About </Link>
                    </li>
                    <li>
                        <Link to="/markets">Markets</Link>
                    </li>
      </ul>

      <h1>DAOrayaki Governance 2.0: Futarchy based governance tool</h1>

      {process.env.REACT_APP_ORACLE_ADDRESS && process.env.REACT_APP_OPERATOR_ADDRESS ? (
        <>
          <Web3ConnectButton account1={account} setProviderData={setProviderData} />
          {/* {web3 && account && <Market web3={web3} account={account} />} */}
          {/* {web3 && account && <MarketList></MarketList>} */}
        </>
      ) : (
        <div>Configuration error</div>
      )}

      <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/markets">
                        <MarketRoutes web3={web3} account={account}/>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
    </div>
</Router>
  )
}

function Home() {
    return <h2>Home</h2>
}

function About() {
    return <h2>About</h2>
}

type MarketProps = {
  web3: any
  account: string
  // address: string
}

const MarketRoutes: React.FC<MarketProps> = ({web3, account}) =>{
// function MarketRoutes() {
let match = useRouteMatch();



return (
    <div>
        <h2> Markets</h2>
    <ul>
        <li>
          <Link to={`${match.url}/0x0787eb31eb099605708c358c1877f63ce0341c64`}>Market 0x0787eb31eb099605708c358c1877f63ce0341c64</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:address`}>
          <MarketProvider  web3={web3} account={account}/>
        </Route>
        <Route path={match.path}>
          <h3>Please select a markets.</h3>
        </Route>
      </Switch>
    </div>
    )
}

{/* function MarketRoute() {

    //@ts-ignore
    let {address} = useParams();

    return (
      <MarketList></MarketList>
    )
} */}

export default App
