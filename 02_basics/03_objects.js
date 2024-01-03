//objects can be declared in two ways -> literals and constructors
//objects that are made from constructors are "singleton"

//object literals


const mySym=Symbol("key1")


const JsUser = {
    name : "Joy",
    "full name" : "Joy Ghosh", //if "key" is seperated by spaces, then we've to put double quotes("variable name") 
    age : 22,
    [mySym] : "mykey1", //symbol
    location :"Kolkata",
    email :"joy@gmail.com",
    isLoggedIn : ["Mon","Tues"]
}

// console.log(JsUser.email)
// console.log(JsUser["full name"])//only when spaces b/w variables are given
// console.log(JsUser[mySym])

JsUser.email = "joy@yahoo.com"
//Object.freeze(JsUser) --> this value always remains same
console.log(JsUser.email)
JsUser.email = "joy@panda.com"
// console.log(JsUser.email)

JsUser.greeting = function(){
    console.log("hello js")
}
JsUser.greetingTwo = function(){
console.log(`hello js user, ${this.name}`)
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())