import KeysRow from "../KeysRow/KeysRow"
import Stack from '@mui/material/Stack'

const Keys = () => {
    return (
        <Stack
            className="Keys"
            direction="column"
            spacing={1}
            sx={{
                justifyContent: "flex-start",
                alignItems: "stretch",
            }}>
            <KeysRow keyValues={['⬅', '(', ')', '÷']} />
            <KeysRow keyValues={[7, 8, 9, 'x']} />
            <KeysRow keyValues={[4, 5, 6, '-']} />
            <KeysRow keyValues={[1, 2, 3, '+']} />
            <KeysRow keyValues={['ANS', 0, '.', '=']} />
        </Stack>
    )
}

export default Keys