
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

// prg.forEach((key, index, array) => {
//     console.log(key, index, array)
// });

// 

const myCode = [ // inside an array ,there's 3 objects
    {
        langName: "Javascript",
        langFilename: "JS"
    },
    {
        langName: "Java",
        langFilename: "Java"
    },
    {
        langName: "Python",
        langFilename: "Py"
    },
]

myCode.forEach((item)=>{ // we took the value from, array -> object -> value
    console.log(item.langFilename);
})