import React, { useState, Suspense, lazy } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import core from 'src/images/core.png'
import style from 'src/components/style.module.css'

const MainLayout: React.FC = () => {
    return (
        <>
            <Container fluid className={style.mainContent}>
                <Row>
                    <Col md={{ span: 7, offset: 1 }} >
                        <Row>
                            <div className="mt-5">
                                <h1 className={`display-1 ${style.firstText}`}><strong>Innovate. Inform. Inspire</strong></h1>
                                <p>All you need is a decentralized push!</p>
                                <p className="display-6">To empower people,</p>
                                <p className="display-6 ms-5">We must decentralize information</p>
                            </div>
                        </Row>
                        <Row>
                            <Col md={{ span: 4 }}>
                                <p></p>

                            </Col>
                            <Col md={5}>
                                <Button variant="outline-dark" className="me-1" href="https://media.daorayaki.org/">Start Reading</Button>
                                <Button href="https://forum.daorayaki.org/t/readme-daorayaki-content-process/48" variant="outline-dark">Start Writing</Button>

                            </Col>
                            <Col md={3}>
                                <div></div>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs={{ span: 12, offset: 1 }} md={3} className="align-items-end">
                        <div className={`${style.blankDiv} ${style.miniBlankDiv}`}>
                            <img src={core} alt="" width="600vw" className="rounded float-end align-bottom align-items-end"></img>
                        </div>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default MainLayout