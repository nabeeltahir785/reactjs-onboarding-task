const axios = require('axios');

const apiCall = (method:string, url:string, data:string)=>{
    return new Promise((resolve,reject)=>{
        axios[method](
            url,
            data
        ).then((response:any)=>{
            resolve(response);
        }).catch((error:any)=>{
            reject(error)
            throwError(error);
        })
    });
}
const throwError = (error:any)=>{
    new Error("Something went wrong");
}

export default apiCall;
