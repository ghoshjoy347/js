// let myName = "Joy   "

// console.log(myName.length)
// console.log(myName.truelength)
// console.log(myName.trim().length)


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.joy = function(){
    console.log(`Joy is present in all objects `);
}
Array.prototype.heyJoy = function(){
    console.log(`Joy is saying hello `);
}

myHeros.joy()
myHeros.heyJoy()
//heroPower.heyJoy()


//Inheritance

const User = {
    name: "joyop",
    email: "joyop@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User  //OLD ways

// Modern Syntax

Object.setPrototypeOf(TeachingSupport,Teacher) //inheriting one property of one to another


let username2 = "joyyyyop   "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

username2.trueLength()

"joyghosh".trueLength()