import Keys from "../Keys/Keys"
import ReadData from "../ReadData/ReadData"
import Screen from "../Screen/Screen"
import Stack from '@mui/material/Stack'

const Calculator = () => {
    return (
        <Stack
            direction="column"
            spacing={2}
            sx={{
                bgcolor: 'primary.light',
                paddingInline: 2,
                paddingBlock: 3,
                borderRadius: 3,
                boxShadow: '6px 6px 12px #d0d0d0,-6px -6px 12px #ffffff;'
            }}>
            <Screen />
            <ReadData />
            <Keys />
        </Stack >
    )
}

export default Calculator