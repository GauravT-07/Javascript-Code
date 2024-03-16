// strings are used to store and manipulate text

// strings can be created using the following syntax:

let name = "Harry"
let lastname = 'potter'

// Template literals, use backticks `` instead of quotes to define them
// with template literals it is possible to use both single quote and double quote inside a string

let house = `Harry potter's house name is "Gryffindor"`

// we can insert a variable directly in templete literals, this process is called as string interpolation

let introduction = `Hogwarts was the school ${name} went to`

console.log(name +' '+ lastname)
console.log(house)
console.log(introduction)


//Escape Sequence characters
// If you tr to print this, javascript will misunderstand it : let name = 'Dumbel'Dore'
//we can use single quote escape sequence to solve the problem

let principle = 'Dumble\'Dore'
console.log(principle)

// Similar thing can be done for Double quotes
// Other Escape Characters are :
// \n -  newline  \t -> tab \r -> Carraige return


// String Properties and methods

console.log(name.length)  // prints length of letter harry -> 5
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4)) // prints rr // Note - in 2 to 4 - 4 is not included
console.log(name.slice(2))  //prints rry // range - 2 to end
console.log(name.replace('ry','i')) // prints Hari // Harry Changed to Hari
console.log(name.concat(lastname,"Yes")) // prints HarrypotterYes
let friend = '  ronald  ' 
console.log(friend.trim())  //print ronald // removes whitespace


//strings are immutable(can not be change)
// In order to access the characters at an following index

console.log(name[0])

console.log("har\"".length) // prints 4


