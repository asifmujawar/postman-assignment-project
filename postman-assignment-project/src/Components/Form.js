import react from 'react'
import {useContext} from 'react'
import { Box, Select, MenuItem ,TextField,Button} from '@mui/material'
import { makeStyles} from '@mui/styles'
import {DataContext} from '../Context/DataProvider'
const useStyles = makeStyles({
    component:{
        display:'flex'
    },
    select:{
        width:150,
        height:40,
        backgroundColor:'black',
        color:['white','!important']
    },
    textfield:{
        width:"100%",
        background:'#f6f6f6'
    },
    button:{
        padding:'8px',
        backgroundColor:'#1C6DD0',
        marginLeft:[5,'!important']
    }
})


function Form({onSendClick}) {
    const classes = useStyles();
    const {formdata,setformdata} = useContext(DataContext)
    

    const onurlChange = (e)=>{
        setformdata({...formdata,url:e.target.value})
        console.log(formdata)
    }

    const handleChange = (e)=>{
        setformdata({...formdata,type:e.target.value})
    }
    return (
        <Box className={classes.component}>
            <Select
                value={formdata.type}
                label="POST"
                className={classes.select}
                onChange={(e) => handleChange(e)}
            >
                <MenuItem value={'POST'}>POST</MenuItem>
                <MenuItem value={'GET'}>GET</MenuItem>
            </Select>
            <TextField
            size="small"
            className={classes.textfield} 
            onChange={(e)=>onurlChange(e)}/>
            <Button className={classes.button} variant="contained" onClick={()=>onSendClick()}>
                Send
            </Button>
        </Box>
    )
}

export default Form