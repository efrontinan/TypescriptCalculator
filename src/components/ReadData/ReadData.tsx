import Box from '@mui/material/Box'
import './ReadData.css'

const ReadData = () => {
    return (
        <Box
            className="ReadData"
            sx={{
                borderRadius: 3,
                bgcolor: 'primary.light',
            }}>
            <p>Previous: Resultado anterior </p>
        </Box>
    )
}

export default ReadData