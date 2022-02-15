import react from 'react'
import {Snackbar} from '@mui/material'

const SnackBar = ({ errorMsg, error, setError }) => {

    const handleClose = () => {
        setError(false);
    }
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message={errorMsg}
        />
    )
}

export default SnackBar