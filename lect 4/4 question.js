// //
// Q Given a array first=[1,2,3,4,5];
// Write a JavaScript program that fill second array in reverse order of first
// ?
// narr=[5,4,3,2,1]
// Q7_reversearr.txt

function reverse(array){
    let n = array.length;
    for(let i = 0 ; i < n/2; i++){
        let temp = array[n-i-1];
        array[n-i-1] = array[i];
        array[i] = temp; 
    }
    return array;
}
let first = [1,2,3,4,5];
let narr = reverse(first);
console.log(narr);

//
// Q Write a JavaScript program to compute the union of two arrays using push pop without using extra space.
// Input arr1= [1, 2, 3]
// arr2= [100, 2, 1,10]
// Output: [1,2,3,100,10]
// Q8_union.txt
// Displaying Q8_union.txt.

let arr1 = [1,2,3];
let arr2 = [100,1,2,10];
for(let i in arr2){
    let flag = true;
    for(let j in arr1){
        if(arr2[i] == arr1[j]){
            flag = false;
        }
    }
    if(flag){
        arr1.push(arr2[i]);
    }
}
console.log(arr1);

//Q.3
//1. You are given a number n1, representing the size of array a1.
// 2. You are given n1 numbers, representing elements of array a1.
// 3. You are given a number n2, representing the size of array a2.
// 4. You are given n2 numbers, representing elements of array a2.
// 5. The two arrays represent digits of two numbers.
// 6. You are required to add the numbers represented by two arrays and print the
// arrays.

let a1 = [3,1,0,7,5];
let a2 = [1,1,1,1,1,1];
let a3 = [];

let n = (a1.length > a2.length )? (a1.length ): (a2.length);
let j = a1.length - 1;
let k = a2.length - 1;
let c  = 0;
for(let i = 0 ; i < n ; i++){
   let sum = c;
    if(j >= 0){
        sum += a1[j];
   }
   if(k >= 0){
    sum += a2[k];
   }

   c = Math.trunc(sum/10);
   sum = sum%10;
   a3.unshift(sum);
   k--;
   j--;

}
console.log(a3);

//q.4
// Find first and last index of the element
let a4 = [1,5,10,15,22,33,33,33,33,33,40,42,55,55,77];
let find = 33;
let fi = -1;
let li = -1;
let low = 0;
let high = a4.length-1;
while(low  < high){
    let mid = (low +high)/2;
    if(find > a4[mid]){
        low  = mid +1;
    }
    if(find < a4[mid]){
        high = mid -1;
    }
    if(find == a4[mid]){
        fi = mid;
        high= mid-1;
    }
}
low  = 0;
high = a4.length-1;
while(low  < high){
    let mid = (low +high)/2;
    if(find > a4[mid]){
        low  = mid +1;
    }
    if(find < a4[mid]){
        high = mid -1;
    }
    if(find == a4[mid]){
        li = mid;
        low  = mid+1;
    }
}
console.log("last index : " , li ,"and first index : " ,fi)