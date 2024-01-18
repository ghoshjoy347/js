const user = {
    username: "Joy",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database")
        console.log(this);
    }
}

console.log(user.username)
console.log(user.getUserDetails())

//functions in JS

function User(username, loginInCount, isLoggedIn ){
    this.myusername = username
    this.loginCount = loginInCount
    this.isLoggedIn = isLoggedIn

    this.greeying = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("joyyy",12,true)
const userTwo = new User("codewithjoy",11,false)
console.log(userOne.constructor)// reference of the suer
//console.log(userTwo)