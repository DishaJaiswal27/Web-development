//Defining types of files
let type = {
    media : ["mp4","mkv"],
    archives : ["zip","7z","rar","tar","gz","ar","iso","xz"],
    app : ['exe','apk','dmg','pkg','deb'],
    documents : ['docx','doc','pdf','xls','xlsx','odt','ods','odp','odg','odf','txt', 'ps','tex'],
    image : ['png','svg','jpeg']
}

let fs = require("fs");
let path = require("path");

//Organize Function
function organizeFn(dirPath){

    let destPath;
    //Steps ->
    //1. CHECK THE PATH VALIDITY
    //2. CREATE THE ORGANIZED FOLDER
    //3. TO IDENTITY THE ALL FILES IN THE GIVEN PATH
    //4. ORGANIZE THE FILES IN A DIRECTORY ON THE BASIS OF SIMILARITY. 

    //1. CHECK THE PATH VALIDITY
   if(dirPath == undefined){
    //console.log("❗❗❗PLEASE ENTER PATH❗❗❗");
        destPath = process.cwd();
       // return;
   }
   else{
    if(fs.existsSync(dirPath)){

        //2. CREATE THE ORGANIZED FOLDER
        destPath = path.join(dirPath,"Organized_files");
        if(!fs.existsSync(destPath)){
            fs.mkdirSync(destPath);
        }
    }
    else{
        console.log("❗❗❗PLEASE ENTER VALID PATH❗❗❗");
        return;
    }
   }
    //3. TO IDENTITY THE ALL FILES IN THE GIVEN PATH  
    //4. ORGANIZE THE FILES IN A DIRECTORY ON THE BASIS OF SIMILARITY. 
    organizeHelper(dirPath,destPath);
}

//Organize the files 
function organizeHelper(src,dest){

    //3. TO IDENTITY THE ALL FILES IN THE GIVEN PATH
    let childNames = fs.readdirSync(src);
    //console.log(childFiles);

    for(let i = 0 ; i < childNames.length ; i++){
        let childAddress = path.join(src,childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile){
            // console.log(childNames[i]);
            let category = getCategory(childNames[i]);
           sendFiles(childAddress,dest,category);
        }
    }
}

//Categort Function
function getCategory(name){
    let ext = path.extname(name);
    ext = ext.slice(1);
    // console.log(ext);

    for(let types in type){
        let cArrayType = type[types];
        for(let i  = 0 ; i < cArrayType.length;i++){
            if(ext == cArrayType[i]){
                return types;
            }
        }
    }
    return "other category";
}

//Copy /cut files from unorganized directory to organized directory
function sendFiles(srcFilePath,dest,category){
    let cPath = path.join(dest,category);
    if(!fs.existsSync(cPath)){
        fs.mkdirSync(cPath);
    }
    let fileName = path.basename(srcFilePath);
    let destFilePath = path.join(cPath,fileName);
    
    //Copy -->> Copy files from source to destination directory.
    fs.copyFileSync(srcFilePath,destFilePath);

    //Cut -->>  Delete file from source folder
    // fs.unlinkSync(srcFilePath);
}

module.exports = {
    organizeKey : organizeFn
}