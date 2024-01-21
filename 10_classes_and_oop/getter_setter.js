class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){             //getter - if someone wants to access/get the value then the value given
        return this._password.toUpperCase()
    }

    set password(value){        //setters - setting this value
        this._password = value
    }
}

const joy = new User("joy@ai","abc")
console.log(joy.password);