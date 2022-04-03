import axios from "axios";

async function randomAdvice(){
    try {
        const response = await axios.get('https://api.adviceslip.com/advice');
        return response;
    } catch (error) {
        console.log(error)
    }
}

async function randomSearch(input){
    try{
        const res = await axios.get(`https://api.adviceslip.com/advice/search/${input}`)
        return res;
    }
    catch(error){
        console.log(error)
    }
}

export {
    randomAdvice,
    randomSearch
}