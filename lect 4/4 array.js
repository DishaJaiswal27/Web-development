//array declaration
//Array does not contain element of one datatype but of different types. 
let arr = [1,2,3,4,5];
console.log(arr);

for(let i in arr){
    console.log(arr[i]);
}

//methods
let l = arr.length;
console.log(l);

//push - to add element at last 
arr.push("jaiswal");
//unshift - to add element at 0th index
arr.unshift("Disha");
console.log(arr);
//pop - to remove element from last
arr.pop();
//shift - to remove element from beginning
arr.shift();
console.log(arr);
//slice - act as substring method [start index,end index);
console.log(arr.slice(2,5));
//splice - to remove the number of elements starting from a given index;
console.log(arr.splice(2,2))
console.log(arr);
//indexOf - to find index of a given element
console.log(arr.indexOf(5));
//contain -  to check element is in array or not.
//console.log(arr.contains(1));