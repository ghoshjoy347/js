// for of --> loop
//array specific loop

const arr = [1,2,3,4,5,6]

for (const i of arr) {  //for of
    console.log(i)
}

const greetings = "hello"
for (const greet of greetings) {
    console.log(greet);
}


// Maps --> map itself is a object , and also it consists of only unique values and no duplicate values ,whereas in objects it do have 

// const map = new Map() 
// map.set('IN','INDIA')
// map.set('US','UNITED STATES OF AMR')
// map.set('UK','UNITED KINGDOM')

// console.log(map);

// for (const [key,value] of map) {
//     console.log(key, `:`,value);
// }

const myObj = {
    game1 : `nfs`,
    game2 : `rdr2`
}

for (const [key,value] of myObj) {
    console.log(key, `:`,value);
}