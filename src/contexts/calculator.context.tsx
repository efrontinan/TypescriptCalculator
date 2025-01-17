import { createContext, useState } from "react"

interface CalculatorContextProps {
    result: number
    setResult: (value: number) => void
    inputArr: (string | number)[]
    setInputArr: (value: (string | number)[]) => void
    calculate: (value: (string | number)[]) => number
    prevResult: number
}

const CalculatorContext = createContext<CalculatorContextProps>({
    result: 0,
    setResult: () => { },
    inputArr: [],
    setInputArr: () => { },
    calculate: () => 0,
    prevResult: 0
})

const CalculatorProviderWrapper: React.FC<React.PropsWithChildren<{}>> = (props) => {
    const [result, setResult] = useState<number>(0)
    const [inputArr, setInputArr] = useState<(string | number)[]>([])
    const [prevResult, setPrevResult] = useState<number>(Number(localStorage.getItem('prevResult')) || 0)

    const calculate = (value: (string | number)[]): number => {
        const numberToCalc: number = eval(value.join(''))
        setResult(numberToCalc)
        localStorage.setItem('prevResult', numberToCalc.toString())
        setPrevResult(numberToCalc)
        return numberToCalc
    }

    return (
        <CalculatorContext.Provider value={{ result, setResult, inputArr, setInputArr, calculate, prevResult }}>
            {props.children}
        </CalculatorContext.Provider>
    )
}

export { CalculatorContext, CalculatorProviderWrapper }