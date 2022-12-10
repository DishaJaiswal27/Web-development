const request = require("request");
request("https://www.google.com/",cb);
function cb(error, response,html){
    console.log("error :" , error);
    console.log("response :" , response.statusCode);
    console.log("html :",html);
}