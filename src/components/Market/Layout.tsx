import React from 'react'
// import { Paper, Button, TextField, RadioGroup, FormControlLabel, Radio} from '@material-ui/core'
import { Container, Button, Form, Row, Col, ProgressBar, Modal, InputGroup, FormControl, Spinner } from "react-bootstrap"
import { Link, NavLink } from 'react-router-dom'

import styles from '../style.module.css'
import { useState, useEffect } from "react"
//@ts-ignore
import Progress from 'src/components/Market/Progress'
import SpinnerPage from 'src/components/SpinnerPage'
import TradingForm from './TradingForm'
import TraderActions from './TradingActions'


type OperatorActionsProps = {
  isMarketClosed: boolean
  close: any
}

type OracleActionsProps = {
  isMarketClosed: boolean
  marketInfo: any
  resolve: any
}




type LayoutProps = {
  account: string
  isConditionLoaded: boolean
  isMarketClosed: boolean
  marketInfo: any
  setSelectedAmount: any
  selectedAmount: string
  setSelectedOutcomeToken: any
  selectedOutcomeToken: number
  approve: any
  buy: any
  sell: any
  redeem: any
  close: any
  resolve: any
  oracle: string
  creator: string
  createTime: any
  calcCost: any
  calcProfit: any
}


const OperatorActions: React.FC<OperatorActionsProps> = ({ isMarketClosed, close }) => (
  <>
    <h3>Operator actions:</h3>
    <Button variant="danger" onClick={close} disabled={isMarketClosed}>
      Close
    </Button>
  </>
)

const OracleActions: React.FC<OracleActionsProps> = ({ isMarketClosed, marketInfo, resolve }) => {

  const [checkedState, setCheckedState] = useState(
    new Array(marketInfo.outcomes.length).fill(false)
  );

  const handleOnChange = (position: any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
    <>
      <h3>Oracle actions:</h3>
      <div>
        {marketInfo.outcomes.map((outcome: any, index: number) => (
          <li key={index}>
            <input
              type="checkbox"
              id={`custom-checkbox-${index}`}
              name={outcome.short}
              value={outcome.title}
              checked={checkedState[index]}
              onChange={() => handleOnChange(index)}
            />
            <label htmlFor={`custom-checkbox-${index}`}> {outcome.title} </label>
          </li>
        ))}
        <Button
          onClick={() => resolve(checkedState)}
          variant="contained"
          disabled={!isMarketClosed}
        >Resolve</Button>

      </div>
    </>
  )
}


const Layout: React.FC<LayoutProps> = ({
  account,
  isConditionLoaded,
  isMarketClosed,
  marketInfo,
  setSelectedAmount,
  selectedAmount,
  setSelectedOutcomeToken,
  selectedOutcomeToken,
  approve,
  buy,
  sell,
  redeem,
  close,
  resolve,
  oracle,
  creator,
  createTime,
  calcCost,
  calcProfit
}) => {

  console.log(marketInfo)
  var stage1_duration
  var stage2_duration
  if (marketInfo && marketInfo.closeDelay) {
    stage1_duration = parseInt(marketInfo.closeDelay)

  } else {
    stage1_duration = marketInfo && marketInfo.questionType == 0 ? (4) : (3)
  }

  if (marketInfo && marketInfo.resolveDelay) {
    stage2_duration = parseInt(marketInfo.resolveDelay)
  } else {
    stage2_duration = marketInfo && marketInfo.questionType == 0 ? (7) : (4)
  }


  var d = createTime

  let nowDate: Date = new Date(Date.now())
  var diff = nowDate.getTime() - d.getTime();
  diff = diff > 0 ? diff : 0;
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24)) - 1;
  var stage = isMarketClosed ? 1 : 0
  console.log(stage)

  if (isMarketClosed && marketInfo.payoutDenominator) {
    stage = 2
  }

  var nowProgress
  if (stage == 1) {
    diffDays = diffDays - stage1_duration
    diffDays = diffDays > 0 ? diffDays : 0
    console.log('diffdays' + diffDays)
    nowProgress = (diffDays / stage2_duration) * 100
    var startDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() + stage1_duration + stage2_duration) + " " + d.getHours() + ":" + d.getMinutes()
    var remainDays = stage2_duration + stage2_duration - diffDays

  } else {
    console.log('diffdays' + diffDays)
    console.log('duration' + stage1_duration)

    nowProgress = (diffDays / stage1_duration) * 100
    var startDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() + stage1_duration) + " " + d.getHours() + ":" + d.getMinutes()
    var remainDays = stage1_duration - diffDays

  }
  console.log(nowProgress)
  console.log(stage)
  console.log(oracle)

  return (
    <Container className={[styles.conditon].join(' ')}>
      {isConditionLoaded ? (
        <>
          <Row className="justify-content-md-center mt-5">
            <Col xs sm lg="6">
              <Row>
                <h2 className="text-center mb-5">{marketInfo.title}</h2>
              </Row>
              <Row className="mt-2 pt-4 bg-transparent border border-primary">
                <Row>
                  <Progress now={nowProgress} stage={stage}></Progress>
                </Row>
                <Row>

                  <Col sm md={3} className="justify-content-md-center">
                    <p className="mb-0 text-center"> <strong> {marketInfo.funding}k Yakid </strong></p>
                    <p className="mt-0 text-center">Liqudity</p>
                  </Col>
                  <Col sm md={3}>
                    <p className="mb-0 text-center"> <strong> {marketInfo.totalVolume}k Yakid </strong></p>
                    <p className="mt-0 text-center">Total Volume</p>

                  </Col>
                  <Col sm md={4}>
                    <p className="mb-0 text-center"> <strong> {startDate} </strong></p>
                    <p className="mt-0 text-center">{stage == 0 ? (`Closing Date`) : (`Resolving Date`)}</p>
                  </Col>
                  <Col sm md={2}>
                    <p className="mb-0 text-center"> <strong> {remainDays} days </strong></p>
                    <p className="mt-0 text-center">Remaining</p>
                  </Col>

                </Row>
              </Row>
              <Row className="mt-2 bg-transparent border border-primary">
                <TradingForm
                  isMarketClosed={isMarketClosed}
                  marketInfo={marketInfo}
                  setSelectedAmount={setSelectedAmount}
                  setSelectedOutcomeToken={setSelectedOutcomeToken}
                  selectedOutcomeToken={selectedOutcomeToken}
                />
              </Row>
              <Row className="justify-content-end">
                <TraderActions
                  marketInfo={marketInfo}
                  isMarketClosed={isMarketClosed}
                  selectedAmount={selectedAmount}
                  redeem={redeem}
                  approve={approve}
                  buy={buy}
                  sell={sell}
                  setSelectedAmount={setSelectedAmount}
                  calcCost={calcCost}
                  selectedOutcomeToken={selectedOutcomeToken}
                  calcProfit={calcProfit}
                />
              </Row>
              {account && account.toLowerCase() === creator && (
                <OperatorActions isMarketClosed={isMarketClosed} close={close} />
              )}
              {account && account.toLowerCase() === oracle && (
                <OracleActions
                  isMarketClosed={isMarketClosed}
                  marketInfo={marketInfo}
                  resolve={resolve}
                />
              )}
            </Col>
          </Row>

        </>
      ) : (
        <div>
          <SpinnerPage />
        </div>
      )}

    </Container>
  )
}

export default Layout
