import { useCalculation } from '../context/CalculationContextProvider'
import styles from './CalculatorDisplay.module.css'

type CalculatorDisplayProps = {
  value?: string
}

const CalculatorDisplay = ({ value = '0' }: CalculatorDisplayProps) => {
  const calculation = useCalculation()

  return (
    <output className={styles.display} aria-label="Calculator display">
      {calculation.calculation.current}
    </output>
  )
}

export default CalculatorDisplay
