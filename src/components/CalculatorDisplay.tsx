import { useCalculation } from '../context/CalculationContextProvider'
import styles from './CalculatorDisplay.module.css'

type CalculatorDisplayProps = {
  value?: string
}

const CalculatorDisplay = ({ value = '0' }: CalculatorDisplayProps) => {
  const calculation = useCalculation()

  return (
    <div className={styles.display}>
      <div className={styles.numbers}>
        <div className={styles.res}>{calculation.calculation.result}</div>
        <div className={styles.curr}>{calculation.calculation.current}</div>
      </div>
      <div className = {styles.operator}>{calculation.calculation.operator}</div>
    </div>
  )
}

export default CalculatorDisplay
