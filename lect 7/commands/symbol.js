const newLine = require("./newLine");



function operator(buffer,symArr){
    for(let i in symArr){
        let symbol = symArr[i];
        switch(symbol){
            case '-n' :
                buffer = newLine.numberEachLine(buffer);
                break;
            case '-b':
                buffer = numberNonEmptyLine(buffer);
                break;
            case '-s':
                buffer = removeEnter(buffer);
                break;
            // case '>>':
            //     buffer = numberNonEmptyLine(buffer);
            //     break;
            // case '>':
            //     break;
        }
    }
}

module.exports = {
    operator : operator
}