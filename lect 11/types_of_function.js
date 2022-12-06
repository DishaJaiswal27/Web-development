//Types of function
//function statement
//define

// function sayHi(param){
//     console.log("hello", param);
//     return "hi";
// }

//function invocation/call

// sayHi();
// console.log(sayHi(10));
// console.log(sayHi(null));
// console.log(sayHi([1,2,3,4,5]));

//function is treated like a variable
//function definition is passed/stored in a variable.
//1. assignment -> function expression
//High order
let fncontainer = function fn(){
    console.log("i am fun container");
}

//anonymous function
let fn = function (){
    console.log("i am  anonymous fun container");
    return 5;
}

fncontainer();
console.log(fn());

//IIFE -> immediately invoked function expression
// use -> require,pollution 
(function iife(){
    console.log("I am iife function and i invoke on my own when program starts.")
})();

//Arrow function
// to reduce syntax, it is soul of react and use in binding and this.
//Arrow functions are been introduced in the ES6 version of JavaScript. It is used to shorten the code. Here we do not use the “function” keyword and use the arrow symbol.

// Single line of code
let add = (a, b) => a + b;
 
console.log(add(3, 2));
// This shortens the code to a single line compared to other approaches. In a single line of code, the function returns implicitly.
// When there is a need to include multiple lines of code we use brackets. Also, when there are multiple lines of code in the bracket we should write return explicitly to return the value from the function.
// Multiple line of code
const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}
 
console.log(great(3,5));


//function as first citizen
//function can be treated as variable
//1. assignment = function expression
//variable can be passed as  parameter
//2.function can be passed as parameter -> fucntional progrmming , high order function,react
//variable can be passed as return value.
//3. function can be passed as return value. -> closure

function f1(param){
    console.log("hello ", param);
    let a =param();
    return a;
}

function small(){
    let a = 10;
    return a;
}
console.log(f1(small));

function outer(){
    console.log("i am outer");
    return function (){
        console.log("?????");
    }
}
let rVal = outer();
console.log(rVal);
rVal(); 