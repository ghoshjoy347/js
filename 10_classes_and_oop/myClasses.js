//ES6 JS

// class User {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}abc`
//     }
// }


// const joy = new User("joy","joy@gmail.com","123")
// console.log(joy.encryptPassword())
// console.log(joy.changeUserName())

function User(username,email,password){
        this.username = username
        this.email = email
        this.password = password
}


User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}abc`
}

const joyop = new User("joy","joy@gmail.com","123")

console.log(joyop.encryptPassword())
console.log(joyop.changeUserName())





