import React, { useState, useEffect } from 'react'
import { Container, Button, Form, Row, Col, ProgressBar, Modal, InputGroup, FormControl, Spinner } from "react-bootstrap"

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

    useEffect(() => {
        updateConstInfo(selectedAmount)
    }, [])

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


    const buy = () => {
        var buyAmount = parseFloat(selectedAmount)
        var balance = parseFloat(marketInfo.collateralBalance)
        setIsApproving(true)
        buyFunc().then(() => {
            if (balance < buyAmount) {
                setIsEnoughBalance(false)
            }
        }).catch(() => { console.log("something is wrong") })
            .then(() => setIsApproving(false))
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


    const updateConstInfo = async (parms: string) => {
        if (parms != "") {
            const cost = await calcCost(parms)

            const costInfoDic = {
                baseCost: cost,
                fee: 0,
                potentialProfit: parseFloat(parms) - parseFloat(cost),
                total: parms
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
                                <Form.Label>Approved Tokens</Form.Label>
                                <InputGroup>
                                    <Form.Control type="number" readOnly value={marketInfo.collateralBalance} />
                                    <InputGroup.Text>YAKID</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Output Shares</Form.Label>
                                <InputGroup>
                                    <Form.Control type="number" placeholder="Enter output shares " onChange={e => checkInput(e)} value={selectedAmount} readOnly={isApproving} />
                                    <InputGroup.Text>Shares</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col md={7}>
                            <Form.Group className="mb-3 d-line" controlId="formApproveBalance">

                                <Form.Label>Base Cost</Form.Label>
                                <InputGroup>
                                    <Form.Control readOnly value={`${costInfo.baseCost}`} />
                                    <InputGroup.Text>YAKID</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Fee</Form.Label>
                                <InputGroup>
                                    <Form.Control placeholder="Enter output shares " readOnly value={`${costInfo.fee}`} />
                                    <InputGroup.Text>YAKID</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group className="mb-3 d-line" controlId="formApproveBalance">
                                <Form.Label>Potential Profit</Form.Label>
                                <InputGroup>
                                    <Form.Control readOnly value={`${costInfo.potentialProfit}`} />
                                    <InputGroup.Text>YAKID</InputGroup.Text>
                                </InputGroup>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Total</Form.Label>
                                <InputGroup>
                                    <Form.Control readOnly value={`${costInfo.total}`} />
                                    <InputGroup.Text>Shares</InputGroup.Text>
                                </InputGroup>
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
                            <span>Executing... Please dont close this window</span>
                        </div>
                    </Row>
                </Modal.Body>


                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={() => { approve() }} className={isEnoughBalance ? ('d-none') : ('d-block')} disabled={isApproving}>Approve</Button>

                    <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                    <Button variant="primary" onClick={buy} className={isEnoughBalance ? ('d-block') : ('d-none')} disabled={isApproving}>Buy</Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}


export default BuyingModal