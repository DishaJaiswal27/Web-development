// String is created in js using single & double quote.

let str1 = 'Hello Disha, "How are you?"';
let str2 = "Hello Disha, 'How are you?'";

console.log(str1);
console.log(str2);

//methods
console.log(str1.charAt(4));
console.log(str2.charCodeAt(9)); // return ascii value of returned character
console.log(str1.substring(2,9));
console.log(str2.trim());
let str = str1.split(" ");
console.log(str);
console.log(str.join("+"));