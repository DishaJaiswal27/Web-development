//import os module
let val = require("os");
console.log(val.arch()); // architecture of the system.
console.log(val.platform()) // platform of system.
console.log(val.networkInterfaces()); // gives your network related info.
console.log(val.cpus()); // load on the system

//basically os module is used to check the platform capablility for the application processing.