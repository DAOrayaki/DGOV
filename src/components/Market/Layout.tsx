import React from 'react'
import { Paper, Button, TextField, RadioGroup, FormControlLabel, Radio, Checkbox } from '@material-ui/core'
import styles from '../style.module.css'
import  {useState} from "react"

type TradingFormProps = {
  isMarketClosed: boolean
  marketInfo: any
  setSelectedAmount: any
  setSelectedOutcomeToken: any
  selectedOutcomeToken: number
}

type TraderActionsProps = {
  marketInfo: any
  isMarketClosed: boolean
  selectedAmount: string
  redeem: any
  buy: any
  sell: any
}

type OperatorActionsProps = {
  isMarketClosed: boolean
  close: any
}

type OracleActionsProps = {
  isMarketClosed: boolean
  marketInfo: any
  resolve: any
}

type LayoutProps = {
  account: string
  isConditionLoaded: boolean
  isMarketClosed: boolean
  marketInfo: any
  setSelectedAmount: any
  selectedAmount: string
  setSelectedOutcomeToken: any
  selectedOutcomeToken: number
  buy: any
  sell: any
  redeem: any
  close: any
  resolve: any
  oracle: string
  creator: string
}

const TradingForm: React.FC<TradingFormProps> = ({
  isMarketClosed,
  marketInfo,
  setSelectedAmount,
  setSelectedOutcomeToken,
  selectedOutcomeToken,
}) => (
  <>
    <div className={styles.inputContainer}>
      <TextField
        variant="filled"
        label="Collateral value"
        type="number"
        onChange={e => setSelectedAmount(e.target.value)}
        disabled={isMarketClosed}
      />
    </div>
    <RadioGroup
      defaultValue={0}
      onChange={e => setSelectedOutcomeToken(parseInt(e.target.value))}
      value={selectedOutcomeToken}
    >
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
          <FormControlLabel
            value={!isMarketClosed ? outcome.index : 'disabled'}
            control={<Radio color="primary" />}
            label={outcome.title}
          />
          <div className={styles.outcomeInfo}>Probability: {outcome.probability.toString()}%</div>
          <div className={styles.outcomeInfo}>
            My balance: {outcome.balance.toFixed(5).toString()}
          </div>
        </div>
      ))}
    </RadioGroup>
  </>
)

const TraderActions: React.FC<TraderActionsProps> = ({
  marketInfo,
  isMarketClosed,
  selectedAmount,
  redeem,
  buy,
  sell,
}) => (
  <>
    <h3>Trader actions:</h3>
    <div className={styles.actions}>
      <Button
        variant="contained"
        onClick={redeem}
        disabled={!isMarketClosed || !marketInfo.payoutDenominator}
      >
        Redeem
      </Button>
      <Button variant="contained" onClick={buy} disabled={isMarketClosed || !selectedAmount}>
        Buy
      </Button>
      <Button variant="contained" onClick={sell} disabled={isMarketClosed || !selectedAmount}>
        Sell
      </Button>
    </div>
  </>
)

const OperatorActions: React.FC<OperatorActionsProps> = ({ isMarketClosed, close }) => (
  <>
    <h3>Operator actions:</h3>
    <Button variant="contained" onClick={close} disabled={isMarketClosed}>
      Close
    </Button>
  </>
)

// const OracleActions: React.FC<OracleActionsProps> = ({ isMarketClosed, marketInfo, resolve }) => (
//   <>
//     <h3>Oracle actions:</h3>
//     <div className={styles.actions}>
//       {marketInfo.outcomes.map((outcome: any, index: number) => (
//         <Button
//           key={outcome.short}
//           variant="contained"
//           onClick={() => resolve(index)}
//           disabled={!isMarketClosed}
//         >
//           Resolve {outcome.title}
//         </Button>
//       ))}
//     </div>
//   </>
// )
const OracleActions: React.FC<OracleActionsProps> = ({ isMarketClosed, marketInfo, resolve }) => {

  const [checkedState, setCheckedState] = useState(
    new Array(marketInfo.outcomes.length).fill(false)
  );

  const handleOnChange = (position:any) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  return (
  <>
    <h3>Oracle actions:</h3>
    <div>
      {marketInfo.outcomes.map((outcome: any, index: number) => (
        <li key={index}>
        <input
        type="checkbox"
        id={`custom-checkbox-${index}`}
        name={outcome.short}
        value={outcome.title}
        checked={checkedState[index]}
        onChange={() => handleOnChange(index)}
        />
        <label htmlFor={`custom-checkbox-${index}`}> {outcome.title} </label>
        </li>
      ))}
    <Button 
          onClick={() => resolve(checkedState)}
          variant="contained"
          disabled={!isMarketClosed}
    >Resolve</Button>

    </div>
  </>
  )
}


const Layout: React.FC<LayoutProps> = ({
  account,
  isConditionLoaded,
  isMarketClosed,
  marketInfo,
  setSelectedAmount,
  selectedAmount,
  setSelectedOutcomeToken,
  selectedOutcomeToken,
  buy,
  sell,
  redeem,
  close,
  resolve,
  oracle,
  creator
}) => {
  return (
    <Paper className={styles.condition}>
      {isConditionLoaded ? (
        <>
          <h2>{marketInfo.title}</h2>
          <p>State: {marketInfo.stage}</p>
          <TradingForm
            isMarketClosed={isMarketClosed}
            marketInfo={marketInfo}
            setSelectedAmount={setSelectedAmount}
            setSelectedOutcomeToken={setSelectedOutcomeToken}
            selectedOutcomeToken={selectedOutcomeToken}
          />
          <TraderActions
            marketInfo={marketInfo}
            isMarketClosed={isMarketClosed}
            selectedAmount={selectedAmount}
            redeem={redeem}
            buy={buy}
            sell={sell}
          />
          {account && account.toLowerCase() === creator && (
            <OperatorActions isMarketClosed={isMarketClosed} close={close} />
          )}
          {account && account.toLowerCase() === oracle && (
            <OracleActions
              isMarketClosed={isMarketClosed}
              marketInfo={marketInfo}
              resolve={resolve}
            />
          )}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </Paper>
  )
}

export default Layout
