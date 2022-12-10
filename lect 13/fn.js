console.log(varname)
var varname = 10;
console.log(varname)
function fn(){
    console.log(varname)
    var varname = 20;
    console.log(varname);
    function b(){
        console.log(varname)
    }
    b();
}
fn();