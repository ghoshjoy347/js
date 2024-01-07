const userEmail = []

if(userEmail){
    console.log("user have got an email") //if email is not empty then it would print this
}
else{
    console.log("dont have an email") //if email is empty then it would print this
}

//falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


//truthy values

// "0", 'false', " ", [], {}, function(){}


// if(userEmail.length === 0){
//     console.log("Empty Array");
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty")
}

// Nullish Coalescing Operator (??): null undefined
// The above operator is created for null and undefined ,suppose if null/undefined values comes then it would affect the program or won't go further but with Nullish Coalescing Operator, it would check whether it contains value or simply null or undefined,if found null/undefined then it would go to the next value that is assigned there.


let value 

//value = 5 ?? 10
//value = null ?? 10 //always it takes the first value after null/undefined
//value = undefined ?? 10

console.log(value)


// Ternary Operator

// condition ? true : false

const price = 79
price < 80 ? console.log("less than 80") : console.log("greater than 80")
