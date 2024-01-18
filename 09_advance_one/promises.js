// promise - promise object represents the eventual completion or failure of an asynchronous operation and its resulting value
// 3 state of promises - pending, fullfilled, rejected

const promiseOne = new Promise(function(resolve, reject){
// It does as aync task
// database calls, cryptography, network

setTimeout(function(){
    console.log("Async task is complete")

    resolve()

}, 1000)
})


promiseOne.then(function(){      // consumption of promise
    console.log("Promise Consumed"); // '.then' -> is directly related to 'resolve' not others, we get a callback function inside '.then' 
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()                   // resolve() is a method which needs to be called, it helps in connecting ".then" with 'resolve'
    })
}).then(function(){
    console.log("Async 2 solved");
})


const promiseThree =  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Joy", email: "ghosh@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
console.log(user); // we get all the parameters, that is passed from resolve
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true // if false it prints 'joyop', and if true it prints 'Something went wrong'
        if(!error){
            resolve({username: "joyop", password: "123"})
        }
        else{
            reject("Something went wrong")
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {                   // it's called chaining,it gets the returned value from the previous ".then"
    console.log(username)
})
.catch(function(error){              //we need to use catch(), or else it would throw a error
    console.log(error);
})
.finally(() => {              //we need to use catch(), or else it would throw a error
    console.log("The promise is resolved or rejected");
})



const promiseFive = new Promise(function(resolve,reject){  // we can also use arrow function here
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JAvascript", password: "123"})
        }
        else{
            reject("JS went wrong")
        }
    },1000)
}) 

async function consumePromiseFive(){  //async await has an issue that, it cannot directly handle the errors
    try {
        
        const response = await promiseFive
        console.log(response)

    } catch (error) {
        
        console.log(error)

    }
}

consumePromiseFive()



// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users') // fetch is a newtwork request, it needs time we have to use await
//         const data = await response.json() // the data needs to be converted from string to json // response.json - it also takes time to complete so we have to write 'await' for it to execute
//         console.log(data);
//     } catch (error) {
//         console.log("Error occured : ",error)
//     }
// }

// getAllUsers()



//If we want to do the above function, in '.then' , '.catch' 

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {          //here, response is the variable name
    return response.json()
}) 
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))