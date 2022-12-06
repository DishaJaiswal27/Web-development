let fs = require("fs");
let p = require("path");


function tree(path){
    if(path==undefined){
        path = "" +process.cwd();
        // console.log(path);
    }
    else{
        if(!fs.existsSync(path)){ 
            console.log("Invalid path!!!");
            return;       
        }
    }
    treeHelper(path,"");
}

function treeHelper(path,str){
    if(fs.lstatSync().isFile()){
        let string = `${str}----- ${path.basename()}`;
        console.log(string);
    }
    else{
        let string = `${str}|---- ${path.basename()}`;
        console.log(string);
        let contents = fs.readdirSync(path);
        for(let i = 0 ; i < contents.length ; i++){
            treeHelper(p.join(path , contents[i]),str+ "   ");
        }
    }
}

module.exports = {
    tree : tree
}