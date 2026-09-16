import ThemeContextProvider from './context/ThemeContextProvider'
import Calculator from './components/Calculator'
import './App.css'
import CalculationContextProvider from './context/CalculationContextProvider'

const App = () => {
  return (
    <CalculationContextProvider>
      <ThemeContextProvider>
        <Calculator />
      </ThemeContextProvider>
    </CalculationContextProvider>
  )
}

export default App