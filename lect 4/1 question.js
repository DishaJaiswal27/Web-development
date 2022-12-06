
// `Q1.  Print Fizz Buzz.
// Description: Write a program that prints the numbers from
//  1 to 20 and for multiples of 
// '3' print "Fizz"  
// '5' print "Buzz"
// '3' and '5' both print "FizzBuzz"
// else number itself


for(let i = 1 ; i <= 20 ; i++){
    if(i%3 == 0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%3 == 0){
        console.log("Fizz");
    }
    else if(i%5 == 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
console.log("___________________________________________________");


//Q.2  You've to print all prime numbers between a range. 
//  For the range print all the primes numbers between low and high (both included).

for(let i = 2 ; i <= 50 ; i++){
    let flag = true;
    for(let div = 2 ; div *div <=i; div++){
        if(i%div == 0){
            flag = false;
            break;
        }
    }
    if(flag){
        console.log(i);
    }
}
console.log("___________________________________________________");

//Q.3 You've to count the number of digits in a number.
let n = 9865432180;
let dc = 1;
while(n>9){
    dc++;
    n/=10;
}
console.log("digit ",dc);
console.log("___________________________________________________");

//Q.4 Rotate a number by k
let number = 12345;
let k = 3;
n = number;
dc = 1;
while(n>9){
    dc++;
    n/=10;
}
k = k %dc;
if(k < 0){
    k = k - dc;
}
let mul = 1;
let div = 1;
for(let i = 1 ; i <= dc ; i++ ){
    if(i <= k ){
        div *= 10;
    }
    else{
        mul *= 10;
    }
}
let quo = Math.floor(number/div);
let rem = Math.floor(number%div);
number = (rem * mul) + quo;
console.log("on rotating number by n :" + number);
console.log("___________________________________________________");

//Q.5 print fibonnaci series till end
function fibo(n){
    let a = 0 ;
    let b = 1;
    for(let i = 0 ; i < n;i++){
        console.log(a);
        let c = a+b;
        a=b;
        b=c;
    }
}
fibo(10);
console.log("___________________________________________________");

//q.6 print pattern
for(let i = 1; i <= 5 ; i++){
    let st = "";
    for(let j = 1; j <= i ;j++){
        st += "* ";
    }
    console.log(st);
}
console.log("___________________________________________________");

//q.7 print pattern
let sp = 4;
let star = 1;
for(let i = 1; i <= 5 ;i++){
    let st = "";
    for(let j = 1; j <= sp ; j++){
        st += "  ";
    }
    for(let j = 1; j <= star ; j++){
        st += "* ";
    }
    console.log(st);
    sp--;
    star++;
}
console.log("___________________________________________________");

//q.8 print pattern
function starprint(n){
    let sp = n/2;
    let star = 1;
    for(let i = 1; i <= n ;i++){
    let st = "";
    for(let j = 1; j <= sp ; j++){
        st += "  ";
    }
    for(let j = 1; j <= star ; j++){
        st += "* ";
    }
    console.log(st);
    if(i <= n/2){
        sp--;
        star+=2;
    }
    else{
        sp++;
    star-=2;;
    }
}
}
starprint(7)
console.log("___________________________________________________");
