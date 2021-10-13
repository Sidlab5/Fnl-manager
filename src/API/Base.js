import Axios from "axios";

 export  const Base = Axios.create({
    // baseURL: 'http://be5c-197-47-71-37.ngrok.io',
    baseURL: 'http://localhost:8085/',
    headers: {
        'Content-Type': 'Application/json',
        //"Access-Control-Allow-Origin": "*"
    },
});
