import Box from '@mui/material/Box'
import './ReadData.css'
import { useContext } from 'react'
import { CalculatorContext } from '../../contexts/calculator.context'

const ReadData = () => {

    const { prevResult } = useContext(CalculatorContext)

    return (
        <Box
            className="ReadData"
            sx={{
                borderRadius: 3,
                bgcolor: 'primary.light',
            }}>
            <p>Previous: {prevResult} </p>
        </Box>
    )
}

export default ReadData