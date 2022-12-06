//Help Function
function helpFn(){
    console.log(` List of all Commands :
                      1. node main.js tree "dirPath"
                      2. node main.js organize "dirPath"
                      3. node main.js help
    `);
}

module.exports = {
    helpKey : helpFn
}