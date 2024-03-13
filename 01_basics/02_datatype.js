"use strict";  //treat all JS code as newer version
 
// y=0;  Not allowed, with strict mode on , we cannot use undeclared variables , probably this is bydefault for all new JS versions except old one

let name = "Gauarv"
let age = 18
let isLoggenIn = false
let state;

// This are all 7 primitive datatypes - (set of basic datatypes in Java script)
//number => 2 to power 53
//bigint
// string => ""
//boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique

//Non primitive datatype
//object

console.log(typeof undefined); //undefined
console.log(typeof null); //object

// Output of this script :
/*
   undefined
   object
*/