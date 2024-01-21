
const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

//console.log(descriptor);

// console.log(Math.PI)
// Math.PI = 5             // we cannnot overwrite the value of Pi
// console.log(Math.PI)

const joy = {
    name: "abcd",
    price: 250,
    isAvailable: true,
    
    orderJoy: function(){
        console.log("joy not formed");
    }
}
console.log(Object.getOwnPropertyDescriptor(joy,"name"))

//In objects we can define the property 👇
Object.defineProperty(joy,"name",{
    //writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(joy,"name"))

for (let [key,value] of Object.entries(joy)) { //in object, we got 'entries' and then we can iterate
    if (typeof value !== 'function') {
        
        console.log((`${key} : ${value}`))    
    }
}



