console.log(varname);
var varname = 10;
function b(){
    console.log(varname);
}
console.log(varname);
function fn(){
    console.log(varname);
    var varname = 20;
    b();
    console.log(varname);
}
fn();
