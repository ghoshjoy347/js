
function sayMyName(){ //this is a function and we can call it whenever it is required
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
    console.log("E")
    console.log("F")
    console.log("G")
    
}

//sayMyName - it is called as reference
//sayMyName()//execution

//function addTwoNumbers(num1,num2){  ////(num1,num2)within brackets those values are known as "parameters"
//    console.log(num1 + num2)
//}

// function addTwoNumbers(num1,num2){ 

// console.log(num1 + num2)
// }

// Answers -
// 8
// Result :  undefined

function addTwoNumbers(num1,num2){ 

    return num1 + num2
    console.log("xyz") //it won't be printed as it is after return result as after return it cannot be executed,but if we wrote before return then the command would be printed
    }
const result = addTwoNumbers(3, 5) //(3,5)within brackets those values are known as "argument"
//console.log("Result : ", result)
// addTwoNumbers(3,"8")
// addTwoNumbers(3,"a")

function loginUserMessage(username) {

    return (username + " just logged in")
    return `${username} just logged in `
}
//console.log(loginUserMessage('ghosh'))

function calculateCartPrice(...num1) { //spread operator
    return num1
}

console.log(calculateCartPrice(20,40,50))

const user = {
    username: "joy",
    price: "1999"
}

function handleObject(anyobject){
    console.log("username is " + (anyobject.username) ,"and the price is " + (anyobject.price) );
}

handleObject(user)

const myNewArray = [1,2,3,4,5]

function returnThirdValue(getArray) {
    return getArray[2]
}

//console.log(returnThirdValue([1,2,3,4,5]))
console.log(returnThirdValue(myNewArray))