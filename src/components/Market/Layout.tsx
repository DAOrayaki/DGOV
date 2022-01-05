import React from 'react'
// import { Paper, Button, TextField, RadioGroup, FormControlLabel, Radio} from '@material-ui/core'
import { Container, Button, Form, Row, Col, ProgressBar, Modal, InputGroup, FormControl, Spinner } from "react-bootstrap"
import styles from '../style.module.css'
import { useState, useEffect } from "react"
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
  approve: any
  buy: any
  sell: any
  setSelectedAmount: any
  calcCost: any
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

type BuyingModalProps = {
  buyFunc: any
  approveFunc: any
  setModalShow: any
  modelShow: boolean
  marketInfo: any
  isMarketClosed: boolean
  selectedAmount: string
  setSelectedAmount: any
  calcCost: any
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
        <Row className="mt-4">
          <Col sm md={7}>
            <p className="text-center">Trend</p>
          </Col>
          <Col sm md={2}>
            <p>Price(YakID)</p>
          </Col>
          <Col sm md={3}>
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
              <Col sm md={1}>
                <Form.Check type="radio" id={`checkitem${index}`} name="checkitems" onChange={e => setSelectedOutcomeToken(index)} checked={index == selectedOutcomeToken}>
                </Form.Check>
              </Col>
              <Col sm md={6}>
                <Row className="d-inline">
                  <Form.Label>{outcome.title}</Form.Label>
                </Row>
                <Row>
                  <ProgressBar className="pl-0 ml-0" variant="custom" now={parseFloat(outcome.probability.toString()) * 100} label={`${(parseFloat(outcome.probability.toString()) * 100).toFixed(2)}%`}></ProgressBar>
                </Row>
              </Col>
              <Col sm md={2}>
                <div className={styles.outcomeInfo}>{outcome.probability.toString()}</div>
              </Col>
              <Col sm md={3}>
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

const BuyingModal: React.FC<BuyingModalProps> = ({
  buyFunc,
  approveFunc,
  setModalShow,
  modelShow,
  marketInfo,
  isMarketClosed,
  selectedAmount,
  setSelectedAmount,
  calcCost
}) => {

  const [isEnoughBalance, setIsEnoughBalance] = useState<boolean>(false)
  const [isApproving, setIsApproving] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [errorInfo, setErrorInfo] = useState<string>("")
  const min_buy = 1
  const [costInfo, setCostInfo] = useState<any>({
    baseCost: 0,
    fee: 0,
    potentialProfit: 0,
    total: 0
  })

  // useEffect(() => {
  //   console.log('updated effect')
  //   // updateConstInfo()
  // }, [])

  const buy = () => {
    var buyAmount = parseFloat(selectedAmount)
    var balance = parseFloat(marketInfo.collateralBalance)

    buyFunc()

    setModalShow(false)
    if (balance < buyAmount) {
      setIsEnoughBalance(false)
    }
  }

  const approve = async () => {
    var buyAmount = parseFloat(selectedAmount)
    var balance = parseFloat(marketInfo.collateralBalance)
    if (balance >= buyAmount) {
      console.log('bigger')
      setIsEnoughBalance(true)
    } else {
      console.log('approving')
      setIsApproving(true)
      approveFunc()
        .then(() => setIsEnoughBalance(true), () => setIsEnoughBalance(false))
        .catch(() => { console.log("something is wrong") })
        .then(() => setIsApproving(false))
    }
    console.log('isApproving :' + isApproving)
    console.log('balance :' + balance)
    console.log('buyAmount : ' + buyAmount)

  }


  const updateConstInfo = async (parms:string) => {
      if (parms != "") {
        const cost = await calcCost(parms)

        // calcCost().then((cost: any) => {
        const costInfoDic = {
          baseCost: cost,
          fee: 0,
          potentialProfit: parseFloat(parms) - parseFloat(cost),
          total:parms 
        }

        setCostInfo(costInfoDic)

        console.log(costInfo)
        // })
      }

  }

  const checkInput = async (e: any) => {
    var value = e.target.value
    value = parseFloat(value)

    if (value < min_buy) {
      setIsError(true)
      setErrorInfo(`The output share should bigger than ${min_buy}`)
    } else {
      setIsError(false)
      setSelectedAmount(e.target.value)
      updateConstInfo(e.target.value)
      // if (selectedAmount != "") {
      //   const cost = await calcCost()

      //   // calcCost().then((cost: any) => {
      //   const costInfoDic = {
      //     baseCost: cost,
      //     fee: 0,
      //     potentialProfit: parseFloat(selectedAmount) - parseFloat(cost),
      //     total: selectedAmount
      //   }

      //   setCostInfo(costInfoDic)

      //   console.log(costInfo)
      //   // })

      // }
    }
  }

  return (
    <>
      <Modal show={modelShow} onHide={() => setModalShow(false)}>

        <Modal.Body>
          {/* <p>Modal body text goes here.</p> */}
          <Row>
            <Col md={5}>
              <Form.Group as={Row} className="mb-3 d-line" controlId="formApproveBalance">
                <Form.Label>Approved Tokens</Form.Label>
                <Form.Control type="number" readOnly value={marketInfo.collateralBalance} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Output Shares</Form.Label>
                <Form.Control type="number" placeholder="Enter output shares " onChange={e => checkInput(e)} value={selectedAmount} readOnly={isApproving} />
              </Form.Group>
            </Col>
            <Col md={7}>
              <Form.Group className="mb-3 d-line" controlId="formApproveBalance">
                <Form.Label>Base Cost</Form.Label>
                <Form.Control type="number" readOnly value={costInfo.baseCost} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Fee</Form.Label>
                <Form.Control type="number" placeholder="Enter output shares " readOnly value={costInfo.fee} />
              </Form.Group>

              <Form.Group className="mb-3 d-line" controlId="formApproveBalance">
                <Form.Label>Potential Profit</Form.Label>
                <Form.Control type="number" readOnly value={costInfo.potentialProfit} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Total</Form.Label>
                <Form.Control readOnly value={costInfo.total} />
              </Form.Group>

            </Col>
          </Row>
          <Row>
            <div className={isError ? ('d-block') : ('d-none')}>
              <span>{errorInfo}</span>
            </div>
            <div className={isApproving ? ('d-block') : ('d-none')}>
              <Spinner as="span" animation="border" role="status">
              </Spinner>
              <span>Approving... Please dont close this window</span>
            </div>
          </Row>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="secondary" onClick={() => { approve() }} className={isEnoughBalance ? ('d-none') : ('d-block')} >Approve</Button>
          <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
          <Button variant="primary" onClick={buy} className={isEnoughBalance ? ('d-block') : ('d-none')}>Buy</Button>
        </Modal.Footer>
      </Modal>
    </>
  )


}


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
  approve,
  buy,
  sell,
  setSelectedAmount,
  calcCost
}) => {
  const [buyShow, setBuyShow] = useState(false)
  const [sellShow, setSellShow] = useState(false)
  const [redeemShow, setRedeemShow] = useState(false)

  return (
    <>
      <div className={styles.actions}>
        <Button
          variant="outline-dark"
          onClick={() => redeem()}
          // onClick={redeem}
          disabled={!isMarketClosed || !marketInfo.payoutDenominator}
          className="align-self-start"
        >
          Redeem
        </Button>
        <Button variant="outline-dark"
          onClick={() => setBuyShow(true)}
          // onClick={buy} 
          disabled={isMarketClosed}
          className="justify-content-end"
        >
          Buy
        </Button>
        <Button variant="outline-dark"
          onClick={() => setSellShow(true)}
          // onClick={sell}
          disabled={isMarketClosed}
          className="justify-content-start"
        >
          Sell
        </Button>

        {/* <TradingModal action="buy" actionFunc={buy} modelShow={buyShow} setModalShow={setBuyShow}
          marketInfo={marketInfo}
          isMarketClosed={isMarketClosed}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
        ></TradingModal> */}
        <BuyingModal buyFunc={buy} approveFunc={approve} modelShow={buyShow}
          setModalShow={setBuyShow}
          marketInfo={marketInfo}
          isMarketClosed={isMarketClosed}
          selectedAmount={selectedAmount}
          setSelectedAmount={setSelectedAmount}
          calcCost={calcCost}
        >
        </BuyingModal>

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
  approve,
  buy,
  sell,
  redeem,
  close,
  resolve,
  oracle,
  creator,
  createTime,
  calcCost
}) => {

  console.log(marketInfo)
  const stage1_duration = marketInfo && marketInfo.questionType == 0 ? (4) : (3)
  const stage2_duration = marketInfo && marketInfo.questionType == 0 ? (7) : (4)

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
                    <p className="mb-0 text-center"> <strong> {marketInfo.totalVolume} Yakid </strong></p>
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
      )}

    </Container>
  )
}

export default Layout
