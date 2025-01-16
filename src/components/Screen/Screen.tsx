import Stack from '@mui/material/Stack';

const Screen = () => {

    return (
        <Stack direction="column"
            spacing={1}
            sx={{
                justifyContent: "center",
                alignItems: "flex-end",
            }}
            className="Screen">
            <h4>Array de operaciones</h4>
            <h2>Valor de la operación</h2>
        </Stack>
    )
}

export default Screen