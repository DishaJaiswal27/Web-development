function numberEachLine(buffer){
    let j = 1;
    for(let i in buffer){
        buffer[i] = j +" " + buffer[i];
    }
    console.log(buffer);
}

module.exports = {
    numberEachLine : numberEachLine
}