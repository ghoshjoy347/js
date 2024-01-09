
// const prg = ["js","java","cpp","python"]

// const values = prg.forEach((item) => { //forEach doesn't retuns values always it would show undefined
//     console.log(item)
//     return item
// })

// console.log(values)

//const myNum = [1,2,3,4,5,6,7,8,9]

//const newNum = myNum.filter((number) => number > 4) // "filter" returns the value, whereas "forEach" doesn't returns value // ((number) => number > 4) -> this is called call back function, and then a condition (number > 4), those value which satisfies the condition those will return the values
    //console.log(newNum);

// if we start a scope,i.e, { } then we have to use return keyword without return keyword it would give empty array. Check below

// const myNum2 = [1,2,3,4,5,6,7,8,9]

// const newNum2 = myNum2.filter((number) => {
//     return number > 4 // here, using "filter" is easy as compared to "forEach"
// })
//     console.log(newNum2);

const books = [
    {name: "Atomic Habits", genre: "Lifestyle", edition: "2004", publish: "2000" },
    {name: "Psychology of Money", genre: "Finance", edition: "2010", publish: "2001" },
    {name: "Rich Dad Poor Dad", genre: "Finance", edition: "2007", publish: "2002"  },
    {name: "Kabuliwala", genre: "Adventure", edition: "1990", publish: "1980"  },
    {name: "Seven Seas", genre: "Action", edition: "2015", publish: "2003"  },
]

let userBooks = books.filter( (name) => name.genre === "Adventure")

userBooks = books.filter((name) => name.publish > "2000" && name.genre == "Finance")

console.log(userBooks)