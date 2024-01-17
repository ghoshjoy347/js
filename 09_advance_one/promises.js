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


promiseOne.then(function(){
    console.log("Promise Consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
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
console.log(user);
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(error != 0){
            resolve({username: "joy", password: "123"})
        }
        else{
            reject("Something went wrong")
        }
    },100)
})

promiseFour.then().catch()
//5:50:20