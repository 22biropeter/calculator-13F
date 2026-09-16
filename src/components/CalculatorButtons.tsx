import { useEffect, useRef, useState } from 'react'
import styles from './CalculatorButtons.module.css'
import { useCalculation } from '../context/CalculationContextProvider'
import type {Operator} from '../context/CalculationContextProvider'

const buttons = [
  '7', '8', '9', 'DEL',
  '4', '5', '6', '+',
  '1', '2', '3', '-',
  '.', '0', '÷', 'x',
  'RESET', '﹦',
]

const CalculatorButtons = () => {
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [pressedButton, setPressedButton] = useState<string | null>(null)

  const calculation = useCalculation()

  useEffect(() => {
    const keyToButton: Record<string, string> = {
      Numpad0: '0',
      Numpad1: '1',
      Numpad2: '2',
      Numpad3: '3',
      Numpad4: '4',
      Numpad5: '5',
      Numpad6: '6',
      Numpad7: '7',
      Numpad8: '8',
      Numpad9: '9',
      NumpadDecimal: '.',
      NumpadAdd: '+',
      NumpadSubtract: '-',
      NumpadMultiply: 'x',
      NumpadDivide: '÷',
      NumpadEnter: '﹦',
      Backspace: 'DEL',
      Delete: 'RESET',
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      const buttonLabel = keyToButton[event.code]
      if (!buttonLabel || event.repeat) return

      event.preventDefault()
      setPressedButton(buttonLabel)
      buttonRefs.current[buttonLabel]?.click()
    }

    const handleKeyUp = (event: KeyboardEvent) => {
      if (keyToButton[event.code]) {
        setPressedButton(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  }, [])

  const HandleClick = (_label: string) => {
    if (_label in ["0","1","2","3","4","5","6","7","8","9"]){
      calculation.setCurrent(calculation.calculation.current+_label)
    }
    else{
      switch(_label){
        case ".": 
          calculation.setCurrent(calculation.calculation.current+_label)
          break
        case "DEL": 
          const newValue = calculation.calculation.current.slice(0, -1);
          calculation.setCurrent(newValue);
          break
        case "﹦": 
          calculation.doCalculate()
          break
        case "RESET": 
          calculation.doReset()
          break
        default:
          calculation.setOperator(_label as Operator)
      }
    }
  }

  return (
    <div className={styles.buttons}>
      {buttons.map((label) => (
        <button
          onClick={() => HandleClick(label)}
          key={label}
          ref={(button) => {
            buttonRefs.current[label] = button
          }}
          className={`${styles.button}  
            ${label === 'RESET' ? styles.reset : ''}                            
            ${label === '﹦' ? styles.equals : ''}                            
            ${label === 'DEL' ? styles.delete : ''}`}
          data-key-active={pressedButton === label || undefined}
        >
          {label}
        </button>
      ))}
    </div>
  )
}

export default CalculatorButtons
