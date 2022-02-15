import react ,{useContext, useState} from 'react'
import Form from './Form'
import Header from './Header'
import { Box } from '@mui/material'
import {makeStyles} from '@mui/styles'
import SelectTabs from './SelectTabs'
import Response from './Response'
import ErrorScreen from './ErrorScreen'
import {DataContext} from '../Context/DataProvider'
import {checkParams} from '../Utils/common-utils'
import SnackBar from './SnackBar'
import {getData} from '../Service/api'
const useStyles = makeStyles({
    component:{
        width:'70%',
        margin:'20px auto 0 auto'
    }
})

function Home() {
    const classes = useStyles()
    const {formdata,jsonText,headerData,paramData} = useContext(DataContext)
    const [error,setError] = useState(false)
    const [errorMsg,setErrorMsg] = useState('')
    const [errorResponse, setErrorResponse] = useState(false);
    const [apiResponse, setApiResponse] = useState({})
    const onSendClick = async ()=>{
        if(!checkParams(formdata, jsonText, paramData, headerData, setErrorMsg)) {
            setError(true);
            return false;
        }
        let response = await getData(formdata, jsonText, paramData, headerData);
        console.log(response);
        if (response === 'error') {
            setErrorResponse(true);
            return;
        }
        setErrorResponse(false)
        setApiResponse(response.data)
    }
    return (
        <>
            <Header />
            <Box className={classes.component}>
                <Form onSendClick={onSendClick}/>
                <SelectTabs/>
                { errorResponse ? <ErrorScreen /> : <Response data={apiResponse} /> }
                { error && <SnackBar errorMsg={errorMsg} error={error} setError={setError} /> }
            </Box>
        </>
    )
}

export default Home