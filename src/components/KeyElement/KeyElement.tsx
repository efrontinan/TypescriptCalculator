import Button from '@mui/material/Button';
import { useContext } from 'react';
import { CalculatorContext } from '../../contexts/calculator.context';

interface KeyElementProps {
    keyValue: string | number;
}

const KeyElement: React.FC<KeyElementProps> = ({ keyValue }) => {

    const { inputArr, setInputArr, calculate } = useContext(CalculatorContext)

    const handleClick = () => {

        if (keyValue === 'x') {
            const prevAnswer = Number(localStorage.getItem('prevResult'))
            if (inputArr.length === 0) {
                inputArr.push(prevAnswer)
            }
            return inputArr.push('*')
        }

        if (keyValue === '÷') {
            const prevAnswer = Number(localStorage.getItem('prevResult'))
            if (inputArr.length === 0) {
                inputArr.push(prevAnswer)
            }
            return inputArr.push('/')
        }

        if (keyValue === '-' && inputArr.length === 0) {
            const prevAnswer = Number(localStorage.getItem('prevResult'))
            inputArr.push(prevAnswer)
            return inputArr.push('-')
        }

        if (keyValue === '=') {
            if (inputArr.length === 0) return alert('Please enter some value to calculate')
            calculate([...inputArr])
            return setInputArr([])
        }

        if (keyValue === 'ANS') {
            const prevAnswer = Number(localStorage.getItem('prevResult'))
            inputArr.push(prevAnswer)
            return setInputArr([...inputArr])
        }
        if (keyValue === '⬅' && inputArr.length === 0) {
            return setInputArr([])
        }

        if (keyValue === '⬅') {
            inputArr.pop()
            return setInputArr([...inputArr])
        }

        inputArr.push(keyValue)

        setInputArr([...inputArr])

    }

    return (
        <Button
            className='KeyElement'
            variant="contained"
            color='primary'
            onClick={handleClick}>{keyValue}</Button>
    )
}

export default KeyElement