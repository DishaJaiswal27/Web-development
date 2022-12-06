//fileSystem 
let val = require("fs");

//file -> create ,read ,update and delete
let binaryBuffer = val.readFileSync("nodeIntro.txt");
console.log("Buffer contains : \n", binaryBuffer);
console.log("__________________________________________________________");
console.log("Buffer contains : \n"+ binaryBuffer);

//Create file in write mode
val.openSync("abc.txt","w");

//create file if not exist, then content is given 
//if file exists it replace the content of file with this text.
val.writeFileSync("abc.txt","Hello, I am disha");

//create file if not exist, then content is given 
//if file exists it appends the content of file with this text.
val.appendFileSync("abc.txt","\n Nice to meet you!!!!",);

//Folder
//create a folder
val.mkdirSync("Dir1");

//Add contents in Dir1
val.openSync("Dir1/1.txt","w");
val.writeFileSync("Dir1/1.txt","Hello");
val.openSync("Dir1/2.js","w");
val.writeFileSync("Dir1/2.txt","Hello");
val.writeFileSync("Dir1/3.php","<?php  \n ?>");

// val.mkdirSync("Dir1/Dir2");

//take all file of dir in array
let content = val.readdirSync("Dir1");
console.log(content)

for(let i = 0 ; i < content.length ; i++){
    console.log(content[i] +" is deleted.");
    //unlinkSync is used to delete folder;
    val.unlinkSync("Dir1/" + content[i]);
}

content = val.readdirSync("Dir1");
console.log(content)

// // errors -------😒😒😒😒😒
// //to remove dir
// val.rmdirSync("\Dir1");
// console.log("Dir1 is removed" )

//existSync("PathofFile") -> to check that the path given as a parameter is of file or not -> true/false;
let check = val.existsSync("C:\Users\Disha\Downloads\pepcoding web dev\lect 5")
console.log(check);
check = val.existsSync("C:\Users\Disha\.vscode\extensions\cschlosser.doxdocgen-1.4.0");
console.log(check);

// //lstatSync("pathOfFile") -> it gives object to the path to check it is folder or file
// //isFile -> true/false;
// //isDirectory -> true/false;
// let obj = val.lstatSync(__dirname + "\\1 childProcess.js");
// console.log(obj.isFile);
// console.log(obj.isDirectory);

for(let i = 1 ;i <= 10;i++){
    let path = "lecture - " + i;
    //let path = `Lecture - ${i}`;
    val.mkdirSync(path);
    //val.writeFileSync(path + "//" + "readme.md" , "#readme for ${path}")
    val.writeFileSync(path+"//" +"readme.md","# readme \n lecture"+i); 
}