const marvel = ["hulk","ironman","thor"]
const dc = ["superman","batman","joker"]

// marvel.push(dc)

// console.log(marvel)//it gives the output as an array inside a array -> [ 'hulk', 'ironman', 'thor', [ 'superman', 'batman', 'joker' ] ]

const hero = marvel.concat(dc)//concatenate 2 arrays together into a single array
console.log(hero)

const newhero = [...marvel,...dc]//spread operator , works same like concatenate
console.log(newhero)

const array1 = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const array2 = array1.flat(Infinity)// flat - here sub-arrays are merged together or concatenated into a single array [1,2,3,4,5,6,.....]

console.log(array2)

console.log(Array.isArray("Joy"))//it returns true/false ,if the element present inside is array or not
console.log(Array.from("Joy"))//it converts string element to array -> [ 'J', 'o', 'y' ]

let s1=100
let s2=200
let s3=300

console.log(Array.of(s1,s2,s3))//Set of elements to include in the new array object -> [ 100, 200, 300 ]
