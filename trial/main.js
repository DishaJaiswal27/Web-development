let hp = require(".\\cmds\\help.js")
let tr = require(".\\cmds\\tree.js")
let cmd = process.argv.slice(2);
console.log(cmd);

let ele = cmd[0];
switch(ele){
    case "organize":
        organize(cmd[1]);
        break;
    case "tree" :
        tr.tree(cmd[1]);
        break;
    case "help":
        hp.help();
        break;
    default :
       console.log("Please enter valid command!!");
       break;
}

