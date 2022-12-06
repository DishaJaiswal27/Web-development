#!/usr/bin/env node    //--shebang

//import modules
// let fs = require("fs");
// let path = require("path");
let tree = require(".\\commands\\tree.js");
let organize = require(".\\commands\\organize.js");
let help = require(".\\commands\\help.js");

// //Defining types of files
// let type = {
//     media : ["mp4","mkv"],
//     archives : ["zip","7z","rar","tar","gz","ar","iso","xz"],
//     app : ['exe','apk','dmg','pkg','deb'],
//     documents : ['docx','doc','pdf','xls','xlsx','odt','ods','odp','odg','odf','txt', 'ps','tex'],
//     image : ['png','svg','jpeg']
// }

//Input 
let inputArr = process.argv.slice(2);
//console.log(inputArr);

//options
//node main.js tree "directoryPath";
//node main.js organize "directoryPath";
//node main.js help

//Validity of options
let cmd = inputArr[0];
switch(cmd){
    case "tree":
        tree.treeKey(inputArr[1]);
        break;
    case "organize":
        organize.organizeKey(inputArr[1]);
        break;
    case "help":
        help.helpKey();
        break;
    default:
        console.log("❗❗❗PLEASE ENTER VALID COMMAND❗❗❗")    
}


