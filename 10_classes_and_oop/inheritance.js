class User{
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username) //'super' is used to call the constructor of its parent class to access the parent's properties and methods
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log((`A new course was introduced ${this.username}`))
    }
}

const joy = new Teacher("joy","joy@gmail","123")

joy.addCourse()

const joyop = new User("joyop")

joyop.logMe()

console.log((joy instanceof User))