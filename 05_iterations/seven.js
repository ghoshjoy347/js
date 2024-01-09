
const myNumber = [1,2,3,4,5,6,7,8,9]

// const newNumber = myNumber.map((number) => number + 10)
//console.log(newNumber)


//This is called Chaining, using multiple maps or filters at once, the values are calculated in the way that after one maps then the updated values gets in action with the successive or next map or filter too

const newNumber = myNumber.map((number) => number * 10) 
                          .map((number) => number + 1)
                          .filter((number) => number > 40)

console.log(newNumber)