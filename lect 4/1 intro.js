// execution - top to bottom, left to right
//print
console.log("Hello Disha");

//variable
let a ;
//by default - undefined
console.log(a);
a = 10;      //number
a = 10.1;    //number
a = "I am String";         //String
a = null;
a = true;

//variable types - primitive(atomic) types- number,string,boolean,null,symbol;

//Javascript is syntaxically equal to java,c++ and c.
//Js only tells it is a variable not datatype.

//if else , loops is same as java.
for(let i = 1 ; i < 11 ;i++){
    console.log(i);
}

//prime check
let ab = 100;
let flag = true;
for(let i = 2 ; i * i <= ab; i++){
    if(ab%i == 0){
        flag= false;
        break;
    }
}
if(flag){
    console.log(ab + " is prime");
}
else{
    console.log(ab + " is not prime");
}