//install chalk and figlet module
//npm 
let ch = require("chalk");
let figlet = require("figlet");

console.log(ch.red("Hello World"));
console.log(ch.bgYellow("Disha"));
console.log(ch.underline("Jaiswal"));

console.log(ch.red(figlet.textSync("DISHA JAISWAL")));

//NODEJS.DEV