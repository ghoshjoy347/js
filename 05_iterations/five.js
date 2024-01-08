
const prg = ["js","java","cpp","python"]

// prg.forEach(function (item) {
//     console.log(item);
// })


// prg.forEach((item) => {   //using arrow function
// console.log(item);
// })

// function printMe(key) {
//     console.log(key)
// }
// prg.forEach(printMe)

prg.forEach((key, index, array) => {
    console.log(key, index, array)
});

// 8:19:16