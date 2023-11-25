// Primitive Datatype
//           |
//           V
// String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const Temp = null
let userEmail

const id = Symbol("789")
const anotherId = Symbol("789")
console.log(id === anotherId)

const bigNumber = 123456789987456123n

// Reference (Non-Primitive)
//           |
//           V
// Array,Objects,Functions 

const heros = ["ironman", "hulk", "loki"] // Arrays

// Objects (inside curly brackets)
let person = {
    name: "joy", 
    age: 22
} 

const myFunction = function(){
    console.log("Hello World")
}

//------------------------------------------------------------------------------------------------------------------------------

//Stack (Primitive)[copy of the variable not the real or reference value], Heap(Non-Primitive)[reference value or original value]

let myName = "joyghosh"
let anotherName = myName
anotherName = "ghoshop"

console.log(anotherName)
console.log(myName)

let userOne = {
    email: "user@gmail.com",
    upi: "user@okicici"
}

let userTwo = userOne

userTwo.email = "joy@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)