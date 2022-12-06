let fs = require("fs");
let symArr = [];
let fileArr = [];

function separate(inputCommand){
   
//Separate filename and command.
for(let i in inputCommand){
    if(inputCommand[i].includes('-')|| inputCommand[i].includes('>')){
        symArr.push(inputCommand[i]);
    }
    else{
        fileArr.push(inputCommand[i]);
    }
}

// console.log(symArr);
// console.log(fileArr);
// console.log(fileCheck(fileArr));
// console.log(symCheck(symArr))

if(fileCheck(fileArr)&& symCheck(symArr)){
    return true
}
else{
    return false;
}
}

function fileCheck(fileArr){

//Check if file exists or not.
if(fileArr.length == 0){
    console.log("❗❗❗NO INPUT FILES❗❗❗")
    return false;
} 

for(let i in fileArr){
    if(fs.existsSync(fileArr[i])){
    let obj = fs.lstatSync(fileArr[i]).isFile();
    if(!obj){
        console.log("❗❗❗",i,"--> FILE DOESN'T EXIST(THIS IS FOLDER)❗❗❗");
        return false;
    }
    }
    else{
        console.log("❗❗❗",i,"--> FILE DOESN'T EXIST❗❗❗");
        return false;
    }
}
return true;
}

function symCheck(symArr){
    let symbol = ['>>','>','-n','-b','-s'];
    
    for(let i in symArr){
        let flag = false;
        let sym = symArr[i];
        for(let i in symbol){
            if(sym == symbol[i]){
                flag = true;
                break;
            }
        }
        if(!flag){
            return false;
        }
    }

    if(symArr.includes('-n') && symArr.includes('-b'))
    {
        console.log("❗❗❗INVALID COMMAND❗❗❗")
        return false;
    }

    return true;
}

function symContain(symArr){
    if(symArr.includes('>>') || symArr.includes('>')){
        return true;
    }
    return false;
}

module.exports = {
    checkKey : separate,
    symArr : symArr,
    fileArr : fileArr,
    symContains : symContain
}
