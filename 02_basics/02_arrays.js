const marvel = ["hulk","ironman","thor"]
const dc = ["superman","batman","joker"]

// marvel.push(dc)

// console.log(marvel)//it gives the output as an array inside a array -> [ 'hulk', 'ironman', 'thor', [ 'superman', 'batman', 'joker' ] ]

const hero = marvel.concat(dc)//concatenate 2 arrays together into a single array
console.log(hero)

const newhero = [...marvel,...dc]//spread operator , works same like concatenate
console.log(newhero)
