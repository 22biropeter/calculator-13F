import ThreeStateSwitch from './ThreeStateSwitch'
import styles from './CalculatorHeader.module.css'

const CalculatorHeader = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>calc</h1>
      <ThreeStateSwitch />
    </header>
  )
}

export default CalculatorHeader
