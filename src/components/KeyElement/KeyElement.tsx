import Button from '@mui/material/Button';

interface KeyElementProps {
    keyValue: string | number;
}

const KeyElement: React.FC<KeyElementProps> = ({ keyValue }) => {
    return (
        <Button className='KeyElement' variant="contained" color='primary'>{keyValue}</Button>
    )
}

export default KeyElement