import React, { useState, useEffect } from 'react'
import { Container, Button, Form, Row, Col, ProgressBar, Modal, InputGroup, FormControl, Spinner } from "react-bootstrap"

type SellingModalProps = {
    sellFunc: any
    setModalShow: any
    modelShow: boolean
    marketInfo: any
    isMarketClosed: boolean
    selectedAmount: string
    setSelectedAmount: any
    calcCost: any
    selectedOutcomeToken: number
}


const SellingModal: React.FC<SellingModalProps> = ({
    sellFunc,
    setModalShow,
    modelShow,
    marketInfo,
    isMarketClosed,
    selectedAmount,
    setSelectedAmount,
    calcCost,
    selectedOutcomeToken
}) => {
    const [isExecuting, setIsExecuting] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [errorInfo, setErrorInfo] = useState<string>("")
    const [costInfo, setCostInfo] = useState<any>({
        baseCost: 0,
        fee: 0,
        total: 0
    })
    const min_buy = 1
        useEffect(() => {
        updateConstInfo(selectedAmount)
    }, [])

    const sell = () => {
        var buyAmount = parseFloat(selectedAmount)
        var balance = parseFloat(marketInfo.collateralBalance)
        setIsExecuting(true)
        sellFunc().then(
            ()=>{console.log('selling')}).catch(() => {console.log('something wrong')}).then(() => setIsExecuting(false))
    }

    const updateConstInfo = async (parms: string) => {
        if (parms != "") {
            const cost = await calcCost(parms)

            const costInfoDic = {
                baseCost: parms,
                fee: 0,
                total: cost
            }

            setCostInfo(costInfoDic)

            console.log(costInfo)
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
        }
    }

    return (
        <>
            <Modal show={modelShow} onHide={() => setModalShow(false)}>

                <Modal.Body>
                    {/* <p>Modal body text goes here.</p> */}
                    <Row>
                        <Col md={5}>
                            <Form.Group className="mb-3 d-line" controlId="formApproveBalance">
                                <Form.Label>Shell Balance</Form.Label>
                                <InputGroup>
                                    <Form.Control type="number" readOnly value={marketInfo.outcomes[selectedOutcomeToken].balance.toFixed(2).toString()} />
                                    <InputGroup.Text>YAKID</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Sell Shares</Form.Label>
                                <InputGroup>
                                    <Form.Control type="number" placeholder="Enter output shares " onChange={e => checkInput(e)} value={selectedAmount} readOnly={isExecuting} />
                                    <InputGroup.Text>Shares</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md={7}>
                            <Form.Group className="mb-3 d-line" controlId="formApproveBalance">

                                <Form.Label>Base Cost</Form.Label>
                                <InputGroup>
                                    <Form.Control readOnly value={`${costInfo.baseCost}`} />
                                    <InputGroup.Text>Shares</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Fee</Form.Label>
                                <InputGroup>
                                    <Form.Control placeholder="Enter output shares " readOnly value={`${costInfo.fee}`} />
                                    <InputGroup.Text>YAKID</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Total</Form.Label>
                                <InputGroup>
                                    <Form.Control readOnly value={`${costInfo.total}`} />
                                    <InputGroup.Text>YAKID</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                        </Col>
                    </Row>
                    <Row>
                        <div className={isError ? ('d-block') : ('d-none')}>
                            <span>{errorInfo}</span>
                        </div>
                        <div className={isExecuting ? ('d-block') : ('d-none')}>
                            <Spinner as="span" animation="border" role="status">
                            </Spinner>
                            <span>Executing... Please dont close this window</span>
                        </div>
                    </Row>
                </Modal.Body>


                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                    <Button variant="primary" onClick={sell} disabled={isExecuting}>Sell</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default SellingModal