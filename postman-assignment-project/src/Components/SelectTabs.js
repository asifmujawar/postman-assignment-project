import react, { useState ,useContext} from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import {makeStyles} from '@mui/styles'
import TableData from './Table'
import CreateTable from './Table'
import JsonText from './JsonText'
import {DataContext} from '../Context/DataProvider'
function SelectTabs() {
    const [value,setValue] = useState(0)
    const handleChange =(event,newValue)=>{
        setValue(newValue)
    }
    const useStyles = makeStyles({
        component:{
            marginTop:20
        },
        tab:{
            textTransform:['none','!important']
        }
    })

    const {paramData,setParamData,headerData,setHeaderData} = useContext(DataContext)

    const classes = useStyles();
    return (
        <Box className={classes.component}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{sx:{backgroundColor:'#EA5C2B',height:4,bottom:2}}}>
                <Tab label="Params" className={classes.tab}/>
                <Tab label="Header" className={classes.tab}/>
                <Tab label="Body" className={classes.tab}/>
            </Tabs>
            <Box
                role="tabpanel"
                hidden={value !== 0}
                id={`simple-tabpanel-${0}`}
                aria-labelledby={`simple-tab-${0}`}
            >
                <CreateTable text="Query Params" data={paramData} setData={setParamData}/>
            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
            >
                <CreateTable text="Header" data={headerData} setData={setHeaderData}/>
            </Box>
            <Box
                role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
            >
                <JsonText />
            </Box>
        </Box>
    )
}

export default SelectTabs