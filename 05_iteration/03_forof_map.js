// The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object. Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections), as well as the arguments object, generators produced by generator functions, and user-defined iterables

const array = [1,2,3,4,5]

for (const index of array) {
    //console.log(index)
}
//prints 1 2 3 4 5 

const greetings = "Hello World"
for (const greet of greetings) {
    //console.log(greet);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const [key, value] of map) {
     //console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const key of myObject) {
//     console.log(key);
    
// }
// Throws an error, object is not iteratable