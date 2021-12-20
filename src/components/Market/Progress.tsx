import React, { useState } from 'react'
import { Container, Row, Col, ProgressBar } from 'react-bootstrap'
import styles from 'src/components/style.module.css'

type ProgressProperty = {
    now: number
    stage: number
}

type StageProperty = {
    now: number
}

const CloseProgress: React.FC<StageProperty> = ({
    now
}) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={1} sm={1} className="justify-content-center">
                        <div className={styles.circleRed}>
                        </div>
                    </Col>

                    <Col md={4} sm={4}>
                        <ProgressBar now={now} label={`${now}%`}></ProgressBar >
                    </Col>
                    <Col md={1} sm={1}>
                        <div className={styles.circleGray}>
                        </div>
                    </Col>
                    <Col md={4} sm={4}>
                        <ProgressBar now={0} label={`${0}%`}></ProgressBar >
                    </Col>
                    <Col md={1} sm={1}>
                        <div className={styles.circleGray}></div>
                    </Col>

                </Row>
                <Row>
                    <Col md={1} sm={1} className="justify-content-center">
                        <p className="text-left">Start</p>
                    </Col>

                    <Col md={4} sm={4}>
                    </Col>
                    <Col md={1} sm={1}>
                        <p className="text-left">Close</p>
                    </Col>
                    <Col md={4} sm={4}>
                    </Col>
                    <Col md={1} sm={1}>
                        <p className="text-left">Resolve</p>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

const ResolveProgress: React.FC<StageProperty> = ({
    now
}) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={1} sm={1} className="justify-content-center">
                        <div className={styles.circleRed}>
                        </div>
                    </Col>

                    <Col md={4} sm={4}>
                        <ProgressBar now={100} label={`${100}%`}></ProgressBar >
                    </Col>
                    <Col md={1} sm={1}>
                        <div className={styles.circleRed}>
                        </div>
                    </Col>
                    <Col md={4} sm={4}>
                        <ProgressBar now={now} label={`${now}%`}></ProgressBar >
                    </Col>
                    <Col md={1} sm={1}>
                        <div className={styles.circleGray}></div>
                    </Col>

                </Row>
                <Row>
                    <Col md={1} sm={1} className="justify-content-center">
                        <p className="text-left">Start</p>
                    </Col>

                    <Col md={4} sm={4}>
                        <p> ... </p>
                    </Col>
                    <Col md={1} sm={1}>
                        <p className="text-left">Close</p>
                    </Col>
                    <Col md={4} sm={4}>
                    </Col>
                    <Col md={1} sm={1}>
                        <p className="text-left">Resolve</p>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

const EndProgress: React.FC<StageProperty> = ({
    now
}) => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={1} sm={1} className="justify-content-center">
                        <div className={styles.circleRed}>
                        </div>
                    </Col>

                    <Col md={4} sm={4}>
                        <ProgressBar now={100} label={`${100}%`}></ProgressBar >
                    </Col>
                    <Col md={1} sm={1}>
                        <div className={styles.circleRed}>
                        </div>
                    </Col>
                    <Col md={4} sm={4}>
                        <ProgressBar now={100} label={`${100}%`}></ProgressBar >
                    </Col>
                    <Col md={1} sm={1}>
                        <div className={styles.circleRed}></div>
                    </Col>

                </Row>
                <Row>
                    <Col md={1} sm={1} className="justify-content-center">
                        <p className="text-left">Start</p>
                    </Col>

                    <Col md={4} sm={4}>
                        <p> ... </p>
                    </Col>
                    <Col md={1} sm={1}>
                        <p className="text-left">Close</p>
                    </Col>
                    <Col md={4} sm={4}>
                    </Col>
                    <Col md={1} sm={1}>
                        <p className="text-left">Resolve</p>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

const Progress: React.FC<ProgressProperty> = ({
    now,
    stage
}) => {

    const [currentStage, setCurrentStage] = useState<number>(0)

    const data = () => {
        switch (stage) {
            case 0:
                return (
                    <CloseProgress now={now}></CloseProgress>
                )
            case 1:
                return (
                    <ResolveProgress now={now}></ResolveProgress>
                )
            case 2:
                return (
                    <EndProgress now={now}></EndProgress>
                )

        }
    }

    return (<>
        <div>
            {data()}
        </div>
    </>)
}

export default Progress
