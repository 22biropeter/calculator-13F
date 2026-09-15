import ThemeContextProvider from './context/ThemeContextProvider'
import Calculator from './components/Calculator'
import './App.css'

const App = () => {
  return (
    <ThemeContextProvider>
      <Calculator />
    </ThemeContextProvider>
  )
}

export default App