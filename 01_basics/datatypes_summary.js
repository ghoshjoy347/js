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
{
    name: "joy",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World")
}