import axios  from "axios";

export async function API_Call(API_URL) {
    try{
        const Response = await axios.get(API_URL);
        return(Response.data.results)
    }
    catch(error){
        console.log("Error while calling API: "+error.message);
        console.log(error);
        return(error);
    }
};