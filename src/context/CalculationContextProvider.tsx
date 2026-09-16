import React, { createContext, useState } from "react"

export type Operator = "plus" | "minus" | "multiply" | "divide" | null

type CalculationType = {
    result: number,
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
        result: 0,
        operator: null,
        current: "",
    })

    function setOperator(_operator:Operator){
        setCalculation(
            {result: calculation.result,
            operator: _operator,
            current: calculation.current
        })
    }

    function setCurrent(_current: string){
        if (_current == "") _current = "0"
        setCalculation(
            {result: calculation.result,
            operator: calculation.operator,
            current: _current
        })  
    }

    function doReset(){
        setCalculation({
            result: 0,
            current: "",
            operator: null
          })
    }

    function doCalculate(){
        let _resoult: number|null = calculation.result
        let _current: number
        if (calculation.current == "")
            {_current = 0} 
        else {_current = Number.parseFloat(calculation.current)}

        switch(calculation.operator){
            case null:
                return
            case "plus":
                _resoult = _resoult+_current
                break
            case "minus":
                _resoult = _resoult-_current
                break
            case "multiply":
                _resoult = _resoult*_current
                break
            case "divide":
                _resoult = _resoult/_current
        }

        setCalculation({
            operator: null,
            result: _resoult,
            current: ""
        })
    }
    return(
        <CalculationContext value={{calculation,setOperator,setCurrent,doCalculate,doReset}}>
            {children}
        </CalculationContext>
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