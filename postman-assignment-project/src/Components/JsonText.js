import react from 'react'
import {useContext} from 'react'
import { Typography ,TextareaAutosize} from '@mui/material'
import {DataContext} from '../Context/DataProvider'
function JsonText() {
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
    const {setJsonText} = useContext(DataContext)
    const onValueChange = (e)=>{
        setJsonText(e.target.value)
    }
    return (
        <div>
            <Typography>JSON</Typography>
            <TextareaAutosize
                minRows={3}
                maxRows={5}
                style={textareaStyle}
                onChange={(e)=>onValueChange(e)}
            />
        </div>
    )
}

export default JsonText