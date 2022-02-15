import react, { useState } from 'react'
import { Box, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import AddRow from './AddRow'
import {makeStyles} from '@mui/styles'

const useStyles = makeStyles({
    tablecell:{
        border:'1px solid rgba(224,224,224,1)',
        borderCollapse:'collapse',
        padding:['7px 5px','!important']
    }
})

function CreateTable(props) {
    const [rows,setRows] = useState([0])
    const classes = useStyles();
    return (
        <Box>
            <Typography mt={2} mb={2}>{props.text}</Typography>
            <Table sx={{ minWidth: '100%' ,border:'1px solid rgba(224,224,224,1)'}} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tablecell}></TableCell>
                        <TableCell className={classes.tablecell}>Key</TableCell>
                        <TableCell className={classes.tablecell}>Value</TableCell>
                        <TableCell className={classes.tablecell}>Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        rows.map((row,index)=>(
                            <AddRow 
                                setRows={setRows}
                                rowId={index}
                                key={index}
                                data={props.data}
                                setData={props.setData}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </Box>
    )
}

export default CreateTable