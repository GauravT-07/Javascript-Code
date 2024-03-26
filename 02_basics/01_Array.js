// Arrays are variable which can hold more than one values
// It can be of different types.  consta1 = [7,"harry",false]

//different methods to declare array
const arr = [1,2,3,4]
const myarr2 = new Array(1,2,3,4)
console.log(myarr2)

//accessing array values

console.log(arr[0]); // prints 1

//finding the length

let len = arr.length;
console.log(len); 

//changing values

console.log("before : " + arr);
arr[0] = 8
console.log("after : " + arr);

// prints : before:1,2,3,4
// after : 8,2,3,4
// Note - Arrays are mutable, Arrays can be changed

console.log(typeof(arr)) // prints object

// In javascripts , arrays are objects. Arrays can hold many values under a single name.



