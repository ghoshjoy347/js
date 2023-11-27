//Arrays

const myArr =  [0, 1, 2, 3, 4, 5]
const myHero = ["ironman","hulk"]

const myArr2 = new Array(1,2,3,4)
console.log(myArr[0])

//Arrays Methods

myArr.push(6) // push - allows to add the next array value
myArr.push(7)
myArr.pop() // pop - it removes the last value from the array
myArr.unshift(9) // unshift - it places the value at the starting of the array, and shifts the rest of the values to its next positions
myArr.shift()// it eliminates the first value

console.log(myArr.includes(7))// if the element is present then it would show the output as true ,else false

console.log(myArr.indexOf(1))// as the element is not present then, it would show the output as -1, if present then it would show the position of the element starting from 0.
console.log(myArr)

const newArr = myArr.join()//adds elements of an array into a string 

console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

//slice , splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)//it doesn't includes the last range,if 3 then it would take upto 2, the original array doesn't get changed or manipulated ,it remains the same
console.log("B ",myArr)
const myn2 = myArr.splice(1,3)//it includes the last range,if 3 then it would take till 3 only, the original array gets manipulated, it deletes the values from range from the original array
console.log("C ",myArr)
console.log(myn1)
console.log(myn2)