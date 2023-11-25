const name = "joy"
const repo = 2

console.log(name + repo + " Value") // Old or Outdated way to concatenate

console.log(`Hello my name is ${name} and my repo count is ${repo}`) // modern or advanced way to concatenate

const gameName = new String("joy-ghosh-op")

console.log(gameName)
console.log(gameName[2])
console.log(gameName.__proto__)
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-7,4)
console.log(anotherString)

const newStringOne = "  joy   "
console.log(newStringOne)
console.log(newStringOne.trim()) // removes all the starting and ending spaces

const url = "hhtps://joy.com/joy%20ghosh"

console.log(url)
console.log(url.replace("%20","-"))

console.log(url.includes("joy"))//the keyword is present or not, if yes then true, else false
console.log(url.includes("ram"))

console.log(gameName.split("-"))// it splits the string into array