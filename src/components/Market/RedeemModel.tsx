import React, { useState, useEffect } from 'react'
import { Container, Button, Form, Row, Col, ProgressBar, Modal, InputGroup, FormControl, Spinner, Table } from "react-bootstrap"

type RedeemModalProps = {
    redeemFunc: any
    setModalShow: any
    modelShow: boolean
    marketInfo: any
}

const RedeemModal: React.FC<RedeemModalProps> = ({
    redeemFunc,
    setModalShow,
    modelShow,
    marketInfo
}) => {
    const [isExecuting, setIsExecuting] = useState<boolean>(false)

    const redeem = () => {
        setIsExecuting(true)
        redeemFunc().then(() => {
            console.log('redeeming')
        }).catch(
            () => {
                console.log('something is wrong')
            }
        ).then(() => setIsExecuting(false))
    }

    const computeTotal = () => {
        let total = 0
        let den = parseFloat(marketInfo.payoutDenominator.toString())
        for (let i = 0; i < marketInfo.outcomes.length; i++) {
            let outcome = marketInfo.outcomes[i]
            let numerator = parseFloat(outcome.payoutNumerator.toString())
            let balance = parseFloat(outcome.balance.toFixed(5).toString())
            total = total + (numerator / den) * balance
        }
        return total.toFixed(2)
    }

    return (
        <>
            <Modal show={modelShow} onHide={() => setModalShow(false)}>
                <Modal.Body>
                    <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Choice</th>
                                    <th>Payouts</th>
                                    <th>Balances</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    marketInfo.outcomes.map((outcome: any, index: number) => (
                                        <tr>
                                            <td>{index}</td>
                                            <td>{outcome.payoutNumerator.toString() != '0' ? (`${outcome.payoutNumerator.toString()} / ${marketInfo.payoutDenominator.toString()}`) : (`${outcome.payoutNumerator.toString()}`)} YAKID/Share</td>
                                            <td>{outcome.balance.toFixed(2).toString()} Shares</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                                <p>In total: {computeTotal()} YAKID</p>
                    </Row>
                    <Row>
                        <div className={isExecuting ? ('d-block') : ('d-none')}>
                            <Spinner as="span" animation="border" role="status">
                            </Spinner>
                            <span>Executing... Please dont close this window</span>
                        </div>
                    </Row>

                </Modal.Body>

                <Modal.Footer className="d-flex justify-content-between">
                    <Button variant="secondary" onClick={() => setModalShow(false)}>Close</Button>
                    <Button variant="primary" onClick={redeem} disabled={isExecuting}>Redeem</Button>
                </Modal.Footer>

            </Modal>

        </>)
}

export default RedeemModal