import Keys from "../Keys/Keys"
import ReadData from "../ReadData/ReadData"
import Screen from "../Screen/Screen"
import Container from '@mui/material/Container';

const Calculator = () => {
    return (
        <Container maxWidth={'md'} className="Calculator">
            <Screen />
            <ReadData />
            <Keys />
        </Container >
    )
}

export default Calculator