// Immediately invoked function expressions

// Immediately Invoked Function Expressions (IIFE)
// ()()  // first bracket to define function and second isto call function

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // ; is very imp for compiler to end this function here and start next iife functions otherwise it will throw a error while starting next function

( (name) => {
    console.log(`DB CONNECTED FOR ${name}`);
} )('Gaurav')  // parameters can also be passed into this
