
const prg = ["js","java","cpp","python"]

const values = prg.forEach((item) => { //forEach doesn't retuns values always it would show undefined
    console.log(item)
    return item
})

console.log(values)

const myNum = [1,2,3,4,5,6,7,8,9]

const newNum = myNum.filter((num) => num > 4)
    console.log(newNum);

    //8:25:00
