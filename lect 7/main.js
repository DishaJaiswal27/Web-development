let check = require(".\\commands\\check.js");
let bfr = require(".\\commands\\Buffer.js")
let op = require(".\\commands\\symbol.js")
//INPUT
let inputCommand =  process.argv.slice(2);
// console.log(inputCommand)

let flag = check.checkKey(inputCommand);
// console.log(flag);
let symArr ;
let fileArr ;
let Buffer;

if(flag){
    symArr = check.symArr;
    fileArr = check.fileArr;
    // console.log(symArr)
    // console.log(fileArr);
    
    if(check.symContains(symArr)){
        Buffer = bfr.FillSliceBuffer(fileArr);
        op.operator(Buffer,symArr)

    }
    else{
        Buffer = bfr.fillBuffer(fileArr);
        op.operator(Buffer,symArr)
    }
    
}
