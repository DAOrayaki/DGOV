import React, { useState } from 'react'
import { Container, Button, Form, Row, Col, ProgressBar, Modal, InputGroup, FormControl, Spinner } from "react-bootstrap"
import styles from '../style.module.css'
import BuyingModal from 'src/components/Market/BuyModel'
import TradingModal from './TradingModel'
import SellingModal from 'src/components/Market/SellModel'
import RedeemModal from 'src/components/Market/RedeemModel'

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
    selectedOutcomeToken: number
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
    calcCost,
    selectedOutcomeToken
}) => {
    const [buyShow, setBuyShow] = useState(false)
    const [sellShow, setSellShow] = useState(false)
    const [redeemShow, setRedeemShow] = useState(false)

    return (
        <>
            <div className={styles.actions}>
                <Button
                    variant="outline-dark"
                    onClick={() => setRedeemShow(true)}
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

                <BuyingModal buyFunc={buy} approveFunc={approve} modelShow={buyShow}
                    setModalShow={setBuyShow}
                    marketInfo={marketInfo}
                    isMarketClosed={isMarketClosed}
                    selectedAmount={selectedAmount}
                    setSelectedAmount={setSelectedAmount}
                    calcCost={calcCost}
                >
                </BuyingModal>

                <SellingModal sellFunc={sell} modelShow={sellShow} setModalShow={setSellShow}
                    marketInfo={marketInfo}
                    isMarketClosed={isMarketClosed}
                    selectedAmount={selectedAmount}
                    setSelectedAmount={setSelectedAmount}
                    calcCost={calcCost}
                    selectedOutcomeToken={selectedOutcomeToken}
                ></SellingModal>
                <RedeemModal redeemFunc={redeem} modelShow={redeemShow} setModalShow={setRedeemShow}
                    marketInfo={marketInfo}
                ></RedeemModal>

            </div>
        </>
    )
}


export default TraderActions