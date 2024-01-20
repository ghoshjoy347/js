function SetUsername(username){
    // complex db calls
    this.username = username
}

function createUser(username,email,password){
    SetUsername.call(this,username)
    
    this.email = email
    this.password = password
}

const joy = new createUser("joy","joy@google.com","123")
console.log(joy);