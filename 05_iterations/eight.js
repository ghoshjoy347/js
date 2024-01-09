
// Reduce method

// const myNumber = [1,2,3]

// const myTotal = myNumber.reduce((accumulator, current) => accumulator + current, 0) // 0 is initial value

// console.log(myTotal);


const cart = [
    {
        name: "JS course",
        price: 1599
    },
    {
        name: "DSA course",
        price: 4999
    },
    {
        name: "Frontend course",
        price: 2799
    }
]

const total = cart.reduce((accumulator , item) => item.price + accumulator , 0)

console.log(total)