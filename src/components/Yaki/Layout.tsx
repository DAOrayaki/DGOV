import React from 'react'
import { Form, Row, Col, Container, Button } from "react-bootstrap"

type TokenAccountProps = {
    account: string
    tokenInfo: any
    setSelectedAmount: any
    selectedAmount: string
    transform: any
    isYakiTokenLoaded: boolean
    setRecipient: any
}

const Layout: React.FC<TokenAccountProps> = (
    {
        account,
        tokenInfo,
        setSelectedAmount,
        selectedAmount,
        transform,
        isYakiTokenLoaded,
        setRecipient
    }
) => {


    return (
        <>
            {isYakiTokenLoaded ? (
                <Container>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="yakiSymbol">
                            <Form.Label column sm="2">
                                Token Name
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly defaultValue={tokenInfo.symbol}></Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="yakiBalance">
                            <Form.Label column sm="2">
                                Balance
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control plaintext readOnly value={tokenInfo.balance || ''} />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="yakiAmount">
                            <Form.Label column sm="2">
                                Amount
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="string" onChange={e=>setSelectedAmount(e.target.value)}/>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="tradeAccount">
                            <Form.Label column sm="2">
                                Account address
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="string" onChange={e=>setRecipient(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Button onClick={e=>transform()}>
                            Submit
                        </Button>

                    </Form>
                </Container>

            ) : (
                <div>Loading...</div>
            )
            }
        </>
    )
}

export default Layout