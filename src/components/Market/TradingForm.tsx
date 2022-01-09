import React, { useState } from 'react'
import { Container, Button, Form, Row, Col, ProgressBar, Modal, InputGroup, FormControl, Spinner } from "react-bootstrap"
import styles from '../style.module.css'

type TradingFormProps = {
  isMarketClosed: boolean
  marketInfo: any
  setSelectedAmount: any
  setSelectedOutcomeToken: any
  selectedOutcomeToken: number
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
                  <Form.Label>{outcome.link ? (<a href={outcome.link}>{outcome.title}</a>) : (outcome.title)}</Form.Label>
                </Row>
                <Row>
                  <div>
                    <ProgressBar className="pl-0 ml-0 pr-0 mr-0" variant="custom" now={parseFloat(outcome.probability.toString()) * 100} label={`${(parseFloat(outcome.probability.toString()) * 100).toFixed(2)}%`}></ProgressBar>
                  </div>
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

export default TradingForm