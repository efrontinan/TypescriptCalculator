import Stack from '@mui/material/Stack'
import { useContext } from 'react'
import { CalculatorContext } from '../../contexts/calculator.context'

const Screen = () => {

    const { inputArr, result } = useContext(CalculatorContext)

    return (
        <Stack direction="column"
            spacing={1}
            sx={{
                justifyContent: "center",
                alignItems: "flex-end",
                bgcolor: 'secondary.light',
                borderRadius: 3,
                border: 5,
                borderColor: 'primary.dark',
                paddingInline: 2,
                paddingBlock: 1,
                boxShadow: 'inset 4px 4px 16px 0px #ff8f00'
            }}
            className="Screen">
            <h4>{inputArr.join(' ')}</h4>
            <h2>{result}</h2>
        </Stack>
    )
}

export default Screen