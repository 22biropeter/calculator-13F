import { useTheme } from '../context/ThemeContextProvider'
import CalculatorButtons from './CalculatorButtons'
import CalculatorDisplay from './CalculatorDisplay'
import CalculatorHeader from './CalculatorHeader'
import styles from './Calculator.module.css'

const Calculator = () => {
  const { theme } = useTheme()

  return (
    <div className={`${styles.app} calculator-theme-${theme + 1}`}>
      <main className={styles.calculator}>
        <CalculatorHeader />
        <CalculatorDisplay />
        <CalculatorButtons />
      </main>
    </div>
  )
}

export default Calculator
