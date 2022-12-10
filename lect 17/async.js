//normally js code runs from top to bottom and left to right orderly.
//but if we want to read a file of 20mb so it takes lot of time and other code is not run.
//Async is like i will read the file and you will do other work while reading.

let fs = require("fs");

console.log("before");
let data = fs.readFile("f1.txt",cb);
function cb(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(""+ data);
    }
}

console.log("after");
console.log("meanwhileeeee")