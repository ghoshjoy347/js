let score = "33aa"

//within parenthesis() means methods
console.log(typeof score);
console.log(typeof(score)); 

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33"(treated as string) -> 33 (converted to number) 
//"33abc"(both number and alphabet based string) -> NaN(Not A Number)
//"undefined" -> NaN
//"null" -> 0
//"boolean" if true then -> 1 or false then -> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//it gives the output as true

//if used ""(empty string) -> output is false
//if used "joy"(value added string) -> output is true

let anyNumber = 33

let stringNumber = String(anyNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// it changes the number value into string format as the datatype is converted to string

//-------------------OPERATIONS---------------------

let value = 3
let negetiveValue = -value
console.log(negetiveValue);

let gameCounter = 100
gameCounter++
console.log(gameCounter)