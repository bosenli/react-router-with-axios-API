import { randomSearch } from "../services/constants";
import { useState, useEffect } from "react";

function Search(){
    const [advices, setAdvices] = useState([]);
    const [query, setQuery] = useState('');
    // const [msg, setMsg] = useState('')


    const handleOnChange=(e)=>{
        e.preventDefault();
        setQuery(e.target.value);
    }

    async function handleOnClick(e){
    //    e.preventDefault();
        try {
            let res = await randomSearch(query);
            console.log(res.data);
            // setData(res.data)
            if(res.data.slips){
                setAdvices(res.data.slips);
                // setMsg('There are advices for your search input')
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() =>{
        handleOnClick();
    },[])


    return(
        <div>
            <input type="text" onChange={(e) => handleOnChange(e)} />
            <input type="button" onClick={() => handleOnClick()} value="submit"/>
            {
                  (advices.map((advice,index) =>{
                                return (
                                <p>{advice.advice}</p>)
                                
                                }))

            }
               

        </div>
    )
}

export default Search;


// (msg !== null)?(
//     advices.map((advice,index) =>{
//         return (
//         <p>{advice.advice}</p>)
//     })): <p>{msg}</p>