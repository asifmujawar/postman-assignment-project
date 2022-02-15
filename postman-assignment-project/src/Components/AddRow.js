import react, { useState } from 'react'
import { TableRow, TableCell, Checkbox, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    tablecell: {
        border: '1px solid rgba(224,224,224,1)',
        borderCollapse: 'collapse',
        padding: ['7px 5px', '!important']
    },
    check: {
        padding: ['2px 5px', '!important']
    },
    textfield: {
        width: '100%'
    }
})
function AddRow({ setRows, rowId, data, setData }) {
    const classes = useStyles();
    const [checked, setChecked] = useState(false)
    const handlechange = (e) => {
        let result = data.filter(entry => entry.id === Number(e.target.name))[0];
        if (!checked) {
            setChecked(true)
            setRows(oldArr => [...oldArr, rowId])
            result = { ...result, id: rowId, check: true }
        }
        else {
            setChecked(false)
            result = { ...result, id: rowId, check: false }
        }

        let index = data.findIndex((value) => value.id === Number(e.target.name));
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }
    }
    const onTextChange = (e)=>{
        let result = data.filter(entry => entry.id === rowId)[0];
        result = { ...result, id: rowId, [e.target.name]: e.target.value }
        let index = data.findIndex((value) => value.id === rowId);
        if (index === -1) {
            setData(oldArr => [...oldArr, result]);
        } else {
            const newArray = Object.assign([...data], {
                [index]: result
            });
            setData(newArray)    
        }
    }
    return (
        <TableRow>
            <TableCell
                className={classes.tablecell}>
                <Checkbox size="large" checked={checked}
                    className={classes.check}
                    onChange={(e) => handlechange(e)}
                />
            </TableCell>
            <TableCell
                className={classes.tablecell}>
                <TextField
                    className={classes.textfield}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    onChange={(e) => onTextChange(e)}
                    name="key"
                />
            </TableCell>
            <TableCell
                className={classes.tablecell}>
                <TextField className={classes.textfield}
                    inputProps={{ style: { height: 30, padding: '0 5px' } }}
                    onChange={(e) => onTextChange(e)}
                    name="value"
                />
            </TableCell>
        </TableRow>
    )
}

export default AddRow