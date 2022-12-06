//MacOs is inspired by unix(AT & T's Lab -> Linux) has different convention of path using forward slash(/);
// while in windows , backslash is required (\);
// file name sometimes contain space which may on run give filename error name.
//so our code becomes platform dependent.
//to remove this , nodejs provide "path " module.
let fs = require("fs");
let val = require("path");

for(let i = 1 ; i <= 5; i++){
    let path = `Lecture - ${i}`;
    fs.mkdirSync(path);
    fs.writeFileSync(val.join(path,"readme.md"),`#readme for ${path}`);
}

//join -> used to add slash according to os
//extname -> return extension of the file
//basename -> return child file or folder name.

let name = val.extname(val.join(__dirname,"nodeIntro.txt"));
console.log("extension ", name);
name = val.basename(__dirname);
console.log("extension ", name);
name = val.basename(val.join(__dirname,"lect 1.pdf"));
console.log("extension ", name);