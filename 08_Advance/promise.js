const promiseOne  = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
      console.log('Async task is complete')
      resolve()
    }, 1000)
    //resolve() 
})

promiseOne.then(function(){
    console.log('PromiseOne is consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asynctask2 is complete')
        resolve()
    }, 1000)
}).then(function(){
    console.log('Async 2 is resolved')
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
          resolve({user:"Gaurav", emai:"Chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
              let error = false
              if(!error){
                resolve({username: "Gaurav", password: "123"})
              }
              else {
                reject('ERROR: Something went wrong')
              }
    }, 1000)
})

promiseFour
.then(function(user){
   console.log(user)
   return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(err){
    console.log(err)
})
.finally(()=>{
    console.log("promise is either resolved or rejected")
})

promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
          resolve({username: "javascript", password: "123"})
        }
        else {
          reject('ERROR: JS went wrong')
        }
}, 1000)   
})

async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response);
    }
    catch (error){
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error)
//     {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))