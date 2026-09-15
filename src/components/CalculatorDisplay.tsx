import styles from './CalculatorDisplay.module.css'

type CalculatorDisplayProps = {
  value?: string
}

const CalculatorDisplay = ({ value = '0' }: CalculatorDisplayProps) => {
  return (
    <output className={styles.display} aria-label="Calculator display">
      {value}
    </output>
  )
}

export default CalculatorDisplay
