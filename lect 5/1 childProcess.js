//To import module -> require();
let mod = require("child_process");
mod.execSync("calc"); // Calculator

mod.execSync("code"); //VS code

mod.execSync("start chrome https://youtube.com"); //open chrome then youtube

// module stored in a var , 
// var can be used to call different functions of the module.
// argument in the execSync is same as we use in cmd .

// Child process is a modern module.

// //running a js file.
let op = mod.execSync("node trial.js");   
console.log(""+op);
