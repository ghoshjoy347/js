//Dates

let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())
console.log(typeof myDate)

//implementing our own time

let myCreatedDate = new Date(2023,10,14,11,30,49)
console.log(myCreatedDate.toLocaleString())

let myCreatedDate1 = new Date("01-14-2023")
console.log(myCreatedDate1.toLocaleString())

let myTimeStamp = Date.now()

console.log(myTimeStamp)//output would come in milli-seconds(ms)
console.log(myCreatedDate1.getTime())
//hence it is used compare milli-seconds b/w two given dates, which one would be faster 

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)// as january starts here from 0
console.log(newDate.getMinutes())
console.log(newDate.getDay())