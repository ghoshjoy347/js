
const prg = ["js","java","cpp","python"]

const values = prg.forEach((item) => { //forEach doesn't retuns values always it would show undefined
    console.log(item)
    return item
})

console.log(values)

//const myNum = [1,2,3,4,5,6,7,8,9]

//const newNum = myNum.filter((number) => number > 4) // "filter" returns the value, whereas "forEach" doesn't returns value // ((number) => number > 4) -> this is called call back function, and then a condition (number > 4), those value which satisfies the condition those will return the values
    //console.log(newNum);

// if we start a scope,i.e, { } then we have to use return keyword without return keyword it would give empty array. Check below

const myNum2 = [1,2,3,4,5,6,7,8,9]

const newNum2 = myNum2.filter((number) => {
    return number > 4 // here, using "filter" is easy as compared to "forEach"
})
    console.log(newNum2);
