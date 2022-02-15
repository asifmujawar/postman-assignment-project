import react from 'react'
import logo from './postman-logo.png'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    logo:{
        width:100,
        padding:5
    }
})
function Header(){
    const classes = useStyles();
    return(
        <div>
            <img src={logo} className={classes.logo}/>
        </div>
    )
}

export default Header