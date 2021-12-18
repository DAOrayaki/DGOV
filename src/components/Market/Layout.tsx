import React from 'react'
// import { Paper, Button, TextField, RadioGroup, FormControlLabel, Radio} from '@material-ui/core'
import { Container, Button, Form, Row, Col, ProgressBar, Modal, InputGroup, FormControl, Spinner } from "react-bootstrap"
import styles from '../style.module.css'
import { useState } from "react"
//@ts-ignore
import Progress from 'src/components/Market/Progress'


type TradingFormProps = {
  isMarketClosed: boolean
  marketInfo: any
  setSelectedAmount: any
  setSelectedOutcomeToken: any
  selectedOutcomeToken: number
}

type TraderActionsProps = {
  marketInfo: any
  isMarketClosed: boolean
  selectedAmount: string
  redeem: any
  buy: any
  sell: any
  setSelectedAmount: any

}

type OperatorActionsProps = {
  isMarketClosed: boolean
  close: any
}

type OracleActionsProps = {
  isMarketClosed: boolean
  marketInfo: any
  resolve: any
}

type TradingModalProps = {
  action: string
  actionFunc: any
  setModalShow: any
  modelShow: boolean
  marketInfo: any
  isMarketClosed: boolean
  selectedAmount: string
  setSelectedAmount: any
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
  buy: any
  sell: any
  redeem: any
  close: any
  resolve: any
  oracle: string
  creator: string
  createTime: any
}

const TradingForm: React.FC<TradingFormProps> = ({
  isMarketClosed,
  marketInfo,
  setSelectedAmount,
  setSelectedOutcomeToken,
  selectedOutcomeToken,
}) => (
  <>
    <Form>
      {/* <div className={styles.inputContainer}>
      <TextField
        variant="filled"
          label="Collateral value"
          type="number"
          onChange={e => setSelectedAmount(e.target.value)}
          disabled={isMarketClosed}
        />
      </div> */}
      {/* <Form.Group className="mb-3" controlId='amount'>
        <Form.Label>Yaki</Form.Label>
      </Form.Group> */}

      <Form.Group>
        {/* <Form.Check type="checkbox" label
        <RadioGroup
          defaultValue={0}
          onChange={e => setSelectedOutcomeToken(parseInt(e.target.value))}
          value={selectedOutcomeToken}
        > */}
        <Row >
          <Col md={1}>
            <p>Trend</p>
          </Col>
          <Col md={6}>
            <p> </p>
          </Col>
          <Col md={2}>
            <p>Price(YakID)</p>
          </Col>
          <Col md={3}>
            <p>MyShares</p>
          </Col>

        </Row>
        {marketInfo.outcomes.map((outcome: any, index: number) => (
          <div
            key={outcome.title}
            className={[
              styles.outcome,
              marketInfo.payoutDenominator > 0 && outcome.payoutNumerator > 0 && styles.rightOutcome,
              marketInfo.payoutDenominator > 0 &&
              !(outcome.payoutNumerator > 0) &&
              styles.wrongOutcome,
            ].join(' ')}
          >
            {/* <FormControlLabel
                value={!isMarketClosed ? outcome.index : 'disabled'}
                control={<Radio color="primary" />}
                label={outcome.title}
              /> */}
            <Row>
              <Col md={1}>
                <Form.Check type="radio" id={`checkitem${index}`} name="checkitems" onChange={e => setSelectedOutcomeToken(index)}>
                </Form.Check>
              </Col>
              <Col md={6}>
                <Row className="d-inline">
                  <Form.Label>{outcome.title}</Form.Label>
                </Row>
                <Row>
                  <ProgressBar className="pl-0 ml-0" now={parseFloat(outcome.probability.toString()) * 100} label={`${parseFloat(outcome.probability.toString()) * 100}%`}></ProgressBar>
                </Row>
              </Col>
              <Col md={2}>
                <div className={styles.outcomeInfo}>{outcome.probability.toString()}</div>
              </Col>
              <Col md={3}>
                <div className={styles.outcomeInfo}>
                  {outcome.balance.toFixed(5).toString()}
                </div>
              </Col>
            </Row>
          </div>
        ))}
        {/* </RadioGroup> */}
      </Form.Group>
    </Form >
  </>
)

const TradingModal: React.FC<TradingModalProps> = ({
  action,
  actionFunc,
  setModalShow,
  modelShow,
  marketInfo,
  isMarketClosed,
  selectedAmount,
  setSelectedAmount
}) => {
  const onFire = () => {
    actionFunc()
    setModalShow(false)
  }

  const isDisabled = () => {
    switch (action) {
      case "buy":
        return isMarketClosed || !selectedAmount

      case "sell":
        return isMarketClosed || !selectedAmount

      case "redeem":
        return !isMarketClosed || !marketInfo.payoutDenominator
    }
  }
  return (
    <>
      <Modal show={modelShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {/* <p>Modal body text goes here.</p> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Output Shares</Form.Label>
            <Form.Control type="number" placeholder="Enter output shares " onChange={e => setSelectedAmount(e.target.value)} />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
          <Button variant="primary" onClick={onFire} disabled={isDisabled()}>{action}</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

const TraderActions: React.FC<TraderActionsProps> = ({
  marketInfo,
  isMarketClosed,
  selectedAmount,
  redeem,
  buy,
  sell,
  setSelectedAmount
}) => {
  const [buyShow, setBuyShow] = useState(false)
  const [sellShow, setSellShow] = useState(false)
  const [redeemShow, setRedeemShow] = useState(false)

  return (
    <>
      <div className={styles.actions}>
        <Button
          variant="outline-dark"
          onClick={() => setRedeemShow(true)}
          // onClick={redeem}
          disabled={!isMarketClosed || !marketInfo.payoutDenominator}
        >
          Redeem
        </Button>
        <Button variant="outline-dark"
          onClick={() => setBuyShow(true)}
          // onClick={buy} 
          disabled={isMarketClosed}
        >
          Buy
        </Button>
        <Button variant="outline-dark"
          onClick={() => setSellShow(true)}
          // onClick={sell}
          disabled={isMarketClosed}
        >
          Sell
        </Button>

        <TradingModal action="buy" actionFunc={buy} modelShow={buyShow} setModalShow={setBuyShow}
          marketInfo={marketInfo}
          isMarketClosed={isMarketClosed}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
        ></TradingModal>
        <TradingModal action="sell" actionFunc={sell} modelShow={sellShow} setModalShow={setSellShow}
          marketInfo={marketInfo}
          isMarketClosed={isMarketClosed}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}

        ></TradingModal>
        <TradingModal action="redeem" actionFunc={redeem} modelShow={redeemShow} setModalShow={setRedeemShow}
          marketInfo={marketInfo}
          isMarketClosed={isMarketClosed}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}

        ></TradingModal>


      </div>
    </>
  )
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
  buy,
  sell,
  redeem,
  close,
  resolve,
  oracle,
  creator,
  createTime
}) => {

  var d = createTime
  var startDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() + 7) + " " + d.getHours() + ":" + d.getMinutes()

  let nowDate: Date = new Date(Date.now())
  var diff = nowDate.getTime() - d.getTime();
  diff = diff > 0 ? diff : 0;
  var diffDays = Math.ceil(diff / (1000 * 3600 * 24));
  var stage = isMarketClosed ? 1 : 0
  console.log(stage)

  if (isMarketClosed && marketInfo.payoutDenominator) {
    stage = 2
  }
  if (stage == 1) {
    diffDays = diffDays - 7
    diffDays = diffDays > 0 ? diffDays : 0
  }

  var nowProgress = (diffDays / 7) * 100
  console.log(nowProgress)
  console.log(stage)

  return (
    <Container className={[styles.conditon].join(' ')}>
      {isConditionLoaded ? (
        <>
          <Row className="justify-content-md-center mt-5">
            <Col xs lg="6">
              <Row>
                <h2 className="text-center mb-5">{marketInfo.title}</h2>
              </Row>
              <Row className="mt-2 pt-4 bg-light">
                <Row>
                  <Progress now={nowProgress} stage={stage}></Progress>
                </Row>
                <Row>

                  <Col md={3} className="justify-content-md-center">
                    <p className="mb-0 text-center"> {marketInfo.funding} Yakid </p>
                    <p className="mt-0 text-center">Liqudity</p>
                  </Col>
                  <Col md={3}>
                    <p className="mb-0 text-center"> {marketInfo.totalVolume} Yakid </p>
                    <p className="mt-0 text-center">Total Volume</p>

                  </Col>
                  <Col md={4}>
                    <p className="mb-0 text-center"> {startDate} </p>
                    <p className="mt-0 text-center">Closing Date</p>
                  </Col>
                  <Col md={2}>
                    <p className="mb-0 text-center"> {diffDays} day</p>
                    <p className="mt-0 text-center">Remaining</p>
                  </Col>

                </Row>
              </Row>
              <Row className="mt-2 bg-light">
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
                  buy={buy}
                  sell={sell}
                  setSelectedAmount={setSelectedAmount}
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
          <h1 className="text-center">Loading...</h1>
          </div>
        // <Spinner animation="border" role="status" className="align-center">
          // <span className="visually-hidden">Loading...</span>
        // </Spinner>
      )}

    </Container>
  )
}

export default Layout
