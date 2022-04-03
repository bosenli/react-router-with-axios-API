//related to constants.js, axios call

import { randomAdvice } from "../services/constants";

import { useState, useEffect } from "react";

function Random(){

    const [counsel, setCounsel] = useState("")

  async function handleClick(){
      const answer = await randomAdvice();  //from service constants
      console.log(answer);
      const advice = answer.data.slip.advice;
      console.log(advice);
      setCounsel(advice);
  }

  useEffect(()=>{
    handleClick()
  },[])

    return(
        <div>
            <h1>Random Advice</h1>
            {/* Some kind of function that does the api call */}
            <button onClick={()=>handleClick()}> Click For Random Advice</button>
            <p>{counsel}</p>
        </div>
    )
}

export default Random;