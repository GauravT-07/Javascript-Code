// "use strict";
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name,price){
    // Product(name,price);  // if call is not use then it will not be able to use the given name and price as function context will not be hold and disappear from call stack as soon as function call is over 
    Product.call(this, name, price);
    this.category = 'Food';
}

const chai = new Food("Indian", 400)
console.log(chai);

console.log(new Food('chinese',350).name);
//using call() to invoke a function and specifying the this value

function greet(){
    console.log(this.animal, "typically sleep between", this.sleepDuration)
}

const obj = {
    animal : "Tiger",
    sleepDuration : "2 to 4 hour"
}

greet.call(obj)


//using call() to invoke a function without specifying the first argument 
globalThis.globProp = "Wisen"

function display(){
    console.log(`globProp value is ${this.globProp}`);
}

display.call();  // Logs "globprop value is Wisen"
// if "use strict" is used then it will throw a error with undefined and will not substitute with globalThis


// ------------------- Output-------------------------------------
// Food { name: 'Indian', price: 400, category: 'Food' }
// chinese
// Tiger typically sleep between 2 to 4 hour
// globProp value is Wisen