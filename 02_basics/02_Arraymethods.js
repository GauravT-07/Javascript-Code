const arr = [1,2,3,4,5,6,7,8]
const arr2 = new Array(9,10,11)
const arr3 = [1,2,3,4,5,6,7]

console.log(typeof(arr));   //print object
console.log(typeof(arr.toString()));  //print string

//toString - Converts an array to  a string of comma seperated values.

console.log(arr2.join("-"));  // prints  1-2-3-4-5-6-7-8

console.log(arr.pop());  //prints 8 
// removes last element from the array

arr.push(9)
console.log(arr);

// add 9 at the end of array - prints - 1,2,3,4,5,6,7,9

arr.shift()    // removes first element of array
console.log(arr);   //prints - [2,3,4,5,6,7,9]

arr.unshift(1)  // adds new element at start of array 
console.log(arr);   //prints - [1,2,3,4,5,6,7,9]

delete arr[7]  //deletes the element at given position
console.log(arr);  // prints -  [1,2,3,4,5,6,7,<1 empty item>]
// interesting fact - It deletes the element at index but the space for the element is still allocated to that index

delete arr[6]  //deletes the element at given position
console.log(arr);  // prints [1,2,3,4,5,6,<2 empty items>]

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [7,8,9]

a1 = a1.concat(a2,a3)  // combine two or more arrays and return a new array which needs to be stored/hold in an element unlike other functions
console.log(a1); //prints [1,2,3,4,5,6,7,8,9]

let s = [3,1,2]
s.sort()   //sort the array
console.log(s);  // prints [1,2,3]

console.log(Array.from("gaurav")) // prints - ['g','a','u','r','a','v']
console.log(Array.isArray(s));  //prints true

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));  //prints - [100,200,300]

//slice,splice

console.log("A", arr3); //prints A [1,2,3,4,5,6,7]
const myn1 = arr3.slice(1,3) // gets element from range 1 (included) till range 3 (excluded)
console.log(myn1); //prints [2,3]
console.log("B",arr3); //prints B [1,2,3,4,5,6,7]

console.log("A", arr3); //prints A [1,2,3,4,5,6,7]
const myn2 = arr3.splice(1,3) // gets element from range 1 (included) till range 3 (included)
console.log(myn2); //prints - [2,3,4]
console.log("B",arr3); //prints B [1,5,6,7]
//Note - splice modified the existing array as well by removing elements that come under the given range whereas slice do not do any modifications to the original array