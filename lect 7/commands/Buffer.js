let fs = require("fs");

let Buffer = [];


function sliceBuffer(){
    for(let i = 0 ; i < fileArr.length - 1 ; i++){
        Buffer += fs.readFileSync(fileArr[i]) + '\n';
    }
    return Buffer;
}

function buffer(fileArr){
    for(let i = 0 ; i < fileArr.length ; i++){
        Buffer += fs.readFileSync(fileArr[i]) + '\n';
    }
    return Buffer;
}

module.exports={
    FillSliceBuffer : sliceBuffer,
    fillBuffer : buffer
}