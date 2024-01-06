//Immediately Invoked Function Expression

// function connection(){
//     console.log("database connected")
// }

// connection()

// (function connection(){
//     console.log("database connected")  // we used iife method here ,this is because we get problems with the pollution of global scope, we use iife to reduce or delete the poluution from global scope
// })()


(function chai(){
    //  named IIFE
    console.log(`db connected`)
})();                          // we have to add semicolon(;) explicitly to get the code correct or else it won't be 

( () => {
    console.log(`db connected another`)
}) ();

( (name) => {
    console.log(`db connected another ${name}`)
}) ('joy')