import styles from './CalculatorButtons.module.css'

const buttons = [
  '7', '8', '9', 'DEL',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '.', '0', '/', 'x',
  'RESET', '﹦',
]

const CalculatorButtons = () => {
  return (
    <div className={styles.buttons}>
      {buttons.map((label) => (
        <button
          key={label}
          className={`${styles.button}  
            ${label === 'RESET' ? styles.reset : ''}                            
            ${label === '﹦' ? styles.equles : ''}                            
            ${label === 'DEL' ? styles.delete : ''}`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default CalculatorButtons
