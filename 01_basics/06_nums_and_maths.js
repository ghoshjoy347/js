
//---------------- NUMBERS ---------------------

const score = 400

const balance =  new Number(100) //object
console.log(balance)
console.log(score)
console.log(typeof balance)
console.log(balance.toString)
console.log(balance.toString().length)

console.log(balance.toFixed(2))//it gives "0" after decimal ,here it would give 2times "0" after the decimal ,i.e 100.00{mostly used in e-commmerce applications}

const otherNumber = 23.8963

console.log(otherNumber.toPrecision(3))

const hundreds = 1000000
console.log(hundreds.toLocaleString());//American standards as default

console.log(hundreds.toLocaleString("en-IN"));//Indian Standards

//---------------- MATHS -----------------------

console.log(Math.abs(-5))//it only changes the negative value to positive value

console.log(Math.round(4.3))//round up or down according to circumstances

console.log(Math.ceil(4.3))//ceil i.e, it round up the value into highest value

console.log(Math.floor(4.3))//floor i.e, it round down the value into lowest value

console.log(Math.min(4,2,8,9,7,1))//finds the minimum value

console.log(Math.max(4,2,8,9,7,1))//finds the maximum value

console.log(Math.random())//it gives random value in decimal in between (0 - 1) everytime 

console.log((Math.random()*10) + 1)//minimum value would be 1 but not 0

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min +1)) + min) // this syntax gives random value between 10-20(here max and min values are mentioned)
