let fs = require("fs");
let path = require("path");

//Tree Function
function treeFn(dirPath){
    if(dirPath == undefined){
        //console.log("❗❗❗PLEASE ENTER PATH❗❗❗");
        treeHelper(process.cwd(),"");
        return;
       }
       else{
        if(fs.existsSync(dirPath)){
            treeHelper(dirPath,"");
        }
        else{
            console.log("❗❗❗PLEASE ENTER VALID PATH❗❗❗");
            return;
        }
       }
}

//TreeHelper Function
function treeHelper(dirpath, indentation){
    let isFile = fs.lstatSync(dirpath).isFile();
    if(isFile){
        let fileName = path.basename(dirpath);
        console.log(indentation + "|-------" + fileName);
    }
    else{
        let dirName = path.basename(dirpath);
        console.log(indentation + "--------" + dirName);
        let child = fs.readdirSync(dirpath);
        for(let i = 0; i < child.length ;i++){
            let childAddress = path.join(dirpath,child[i]);
            treeHelper(childAddress,indentation+"\t");
        }
    }
}

module.exports = {
    treeKey : treeFn
}