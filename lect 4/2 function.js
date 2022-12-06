// non - primitive types - array,objects,function.
//function is defined with function keyword.
// no need to define the return type of function and datatype of parameter.
//func can return  only one value but of any type.

function sayHi(param){
    console.log("hi from sayHi func.");
    let rval = Math.random() > 0.3 ? true : "less than 0.3";
    return rval;
}

let val = sayHi(45);
console.log(val);

//Que 1 Write a function  Dec2Binary that Converts given number from decimal to binary?
//Input:13
//Output:1101

function Dec2Binary(param){
    let num = 0 ;
    let p = 1;
    while(param != 0){
        let rem = param%2;
        param = Math.trunc(param/2);
        num += rem *p;
        p *= 10;
    }
    return num;
}

let value = Dec2Binary(13);
console.log(value)

// on division we may get float value but if we want integer value as a quotient 
// use Math.floor(3/2); -- more time complexity
// use Math.trunc(3/2);-- moderate time complexity
//use ~~(3/2); -- less time complexity but give wrong answer on large input 