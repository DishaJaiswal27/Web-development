
let request = require("request");
let cheerio = require("cheerio");

request("https://www.worldometers.info/coronavirus/",cb);

function cb(error,response,html){
    if(error){
        console.log("Error : " , error);
    }
    else{
        Handlehtml(html);
    }
}

function Handlehtml(html){
    let tool = cheerio.load(html);
    let array = tool(".maincounter-number span");
    // for(let i = 0;i < array.length;i++){
    //     console.log(tool(array[i]).text());
    // }
    // console.log(array.length)

    let total = tool(array[0]).text();
    let deaths = tool(array[1]).text();
    let recovered = tool(array[2]).text();
    console.log("Total : " , total);
    console.log("Deaths : ", deaths);
    console.log("recovered : ", recovered);
}