
// //Que  Title Case a Sentence.
// Input:I'm a little tea pot"
// Output: I'm A Little Tea Pot.

let str1 = "I'm a little tea pot";
let str2 = "";
let flag = false;
for(let i = 0 ; i <= str1.length;i++){
    let char = str1.charAt(i);
    if(flag){
        let n = char.charCodeAt(0) - 32;
        char = String.fromCharCode(n);
        flag = false;
    }
    if(char == " "){
        flag = true;
    }
    str2 += char;
}
console.log(str2);

// Que  Find the Longest Word in a String.

// Input:"The quick brown fox jumped over the lazy dog"
// Output: 6

let str = "The quick brown fox jumped over the lazy dog";
let i = 0; 
let j = 0,leng = 0;
while(str[j]!=" "){
    j++;
}
while(j < str.length){
    let length = 0;
    while( str[i] != " " && i < str.length){
        i++;
        length++;
    }
    i++;
    j++;
    while(str[j]!=" " && j < str.length){
        j++;
    }
    if(length > leng){
        leng = length;
    }

}
console.log(leng);

//Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
    let i = str.length - 1;
    let j = target.length -1;
    while(j>= 0){
      if(str[i] != target[j]){
        return false;
      }
      i--;
      j--;
    }
    return true;
  }
  
  confirmEnding("Bastian", "n");

