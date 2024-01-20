class User{
    constructor (username){
        this.username = username
    }

logMe(){
    console.log(`Username : ${this.username}`)
}

    // static createId(){ //'static keyword' it doesn't allow the method or property to get accessed 
    //     return `123`
    // }

}

const joy = new User("joy")
// console.log(joy.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
        
    }
}

const monitor = new Teacher("Monitor","marq@flipkart")
console.log(monitor.logMe())