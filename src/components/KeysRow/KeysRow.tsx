import KeyElement from "../KeyElement/KeyElement"
import Stack from '@mui/material/Stack'

interface KeyRowProps {
    keyValues: (string | number)[];
}

const KeysRow: React.FC<KeyRowProps> = ({ keyValues }) => {
    return (
        <Stack
            className="KeyRow"
            direction="row"
            spacing={1}
            sx={{
                justifyContent: "flex-start",
                alignItems: "stretch",
            }}>
            {keyValues.map(element =>
                <KeyElement key={element} keyValue={element} />
            )}
        </Stack>
    )
}

export default KeysRow