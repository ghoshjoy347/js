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