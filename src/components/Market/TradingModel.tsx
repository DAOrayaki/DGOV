import React, {useState} from 'react'
import { Container, Button, Form, Row, Col, ProgressBar, Modal, InputGroup, FormControl, Spinner } from "react-bootstrap"

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


export default TradingModal