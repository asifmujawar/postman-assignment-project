import react from 'react'
import {Box,Typography,TextareaAutosize} from '@mui/material'
function Response({data}){
    const textareaStyle={
        width:'100%',
        padding:10,
        background:'url(http://i.imgur.com/2cOaJ.png)',
        backgroundAttachment:'local',
        backgroundRepeat:'no-repeat',
        paddingLeft:35,
        paddingTop:10,
        borderColor:'#ccc'
    }
    return(
        <Box>
            <Typography>Response</Typography>
            <TextareaAutosize
                minRows={3}
                maxRows={5}
                style={textareaStyle}
                disabled="disabled"
                value={JSON.stringify(data)}
            />

        </Box>
    )
}

export default Response