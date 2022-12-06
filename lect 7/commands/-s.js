let fs = require("fs");
let buf = fs.readFileSync("file1.txt");
let buffer = [];

console.log(" "+removeEnter(buf));

function removeEnter(buf){
    for(let i = 0 ; i < buf.length;i++){
        if( !(buf[i] == '\n' || buf[i] == '\r') )
                    buffer.push(buf[i]) 
        }
    return buffer;
}