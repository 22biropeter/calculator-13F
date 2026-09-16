import React, { createContext, useState } from "react"

export type Operator = "+" | "-" | "x" | "/" | null

type CalculationType = {
    result: number|null,
    operator: Operator|null,
    current: string
}
type CalculationContextType = {
    calculation: CalculationType,
    setOperator: (_operator:Operator) => void,
    setCurrent: (_current:string) => void,
    doCalculate: () => void,
    doReset: () => void
}

const CalculationContext = createContext<CalculationContextType|undefined>(undefined)

const CalculationContextProvider = ({children}:{children: React.ReactNode}) => {
    const [calculation, setCalculation] = useState<CalculationType>({
        result: null,
        operator: null,
        current: "",
    })

    function setOperator(_operator:Operator){
        if (calculation.result == null){
            setCalculation(
                {result: Number.parseFloat(calculation.current),
                operator: _operator,
                current: ""
            })
        }else{
            setCalculation(
                {result: calculation.result,
                operator: _operator,
                current: calculation.current
            })
        }
        
    }

    function setCurrent(_current: string){
        setCalculation(
            {result: calculation.result,
            operator: calculation.operator,
            current: _current
        })  
    }

    function doReset(){
        setCalculation({
            result: null,
            current: "",
            operator: null
          })
    }

    function doCalculate(){
        let _result: number|null = calculation.result
        let _current: number

        if (_result == null) {_result = 0} 
        if (calculation.current == "")
            {_current = 0} 
        else {_current = Number.parseFloat(calculation.current)}

        switch(calculation.operator){
            case null:
                
                return
            case "+":
                _result = _result+_current
                break
            case "-":
                _result = _result-_current
                break
            case "x":
                _result = _result*_current
                break
            case "/":
                _result = _result/_current
        }
        console.log(_current)
        console.log(_result)

        setCalculation({
            operator: null,
            result: _result,
            current: ""
        })
    }
    return(
        <CalculationContext.Provider value={{calculation,setOperator,setCurrent,doCalculate,doReset}}>
            {children}
        </CalculationContext.Provider>
    )
}
export default CalculationContextProvider

export const useCalculation = () => {
    const context = React.useContext(CalculationContext);
    if (!context) {
        throw new Error("useCalculation must be used within a CalculationContextProvider");
    }
    return context;
};