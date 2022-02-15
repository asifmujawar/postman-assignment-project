import react,{createContext, useState} from 'react'

export const DataContext = createContext(null)

const DataProvider = ({children})=>{
    const [formdata,setformdata] = useState({url:'',type:'POST'})
    const [paramData,setParamData] = useState([])
    const [headerData,setHeaderData] = useState([])
    const [jsonText,setJsonText] = useState('')
    return(
        <DataContext.Provider value={{
            formdata,
            setformdata,
            paramData,
            setParamData,
            headerData,
            setHeaderData,
            jsonText,
            setJsonText
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider