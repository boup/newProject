import React from "react";
import url from "./url"
import axios from "axios"
export const DataContext= React.createContext();
export default function DataProvider ({children}){
    const[cityData,setCityData]=React.useState([]);
    const[lineData,setLineData]=React.useState([]);
    React.useEffect(()=>
    {
        axios.get(`${url}/city`).then((response)=>{
            setCityData(response.data);
        }).catch((e)=>{console.log(e)});
    
        
    axios.get(`${url}/city/${1}/line`).then((response)=>{
        setLineData(response.data);}).catch((e)=>{console.log(e);
        });
    
    },[] );
    
  
return(

    <DataContext.Provider
    value={{ cityData,lineData }}
>{children}</DataContext.Provider>
    );

 }
 