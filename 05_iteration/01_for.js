// for (let index = 0; index < 10; index++) {
//     console.log('Hello World');    
// }

//prints hello world 10 times

// for (let index = 0; index < 5; index++) {
//     if(index==1)
//        console.log('User Connected');  
// }

//prints User Connected 1 time.

// for (let index = 0; index < 5; index++) {
//     if(index==1)
//     {
//        console.log('User Connected');  
//        break;
//     }
//     console.log(index);   
// }

//prints 0 User Connected

// for (let index = 0; index < 5; index++) {
//     if(index==1)
//     {
//        console.log('User Connected');  
//        continue;
//     }
//     console.log(index);   
// }

//prints 0 User Connected 2 3 4 

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value ${j} and inner loop ${i}`);
    //console.log(i + '*' + j + ' = ' + i*j );
   }
    
}

let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}