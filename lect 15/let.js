console.log("Hello")
//temporal dead zone - area before let variable is initialized
// console.log(varname)
//declare
let varname;
//undefined
console.log(varname)
//assign 
varname = 10;
//reassigned
varname = "disha";
//redeclare is not allowed
// let varname;
//during hoisting we got the error


//const cannot be redeclared or reassigned .
//const should have to initialized when it is being declared.
const a = 30;
// a = 40;