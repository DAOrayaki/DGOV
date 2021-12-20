import React, { useState, Suspense, lazy } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import core from 'src/images/core.png'
import style from 'src/components/style.module.css'

const MainLayout: React.FC = () => {
    return (
        <>
            <Container fluid className={style.mainContent}>
                <Row>
                    <Col md={{ span: 7, offset: 1 }} >
                        <div className="mt-5">
                            <h1 className="display-1"><strong>Innovate. Inform. Inspire</strong></h1>
                            <p>All you need is a decentralized push!</p>
                            <p className="display-5">To empower people,</p>
                            <p className="display-5 ms-5">We must decentralize information</p>
                        </div>
                    </Col>
                    <Col xs={3} sm={{span: 12, offset:1}} md={3} className="align-items-end">
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