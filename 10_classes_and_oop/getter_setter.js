class User {
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){             
        return this._email.toUpperCase()
    }

    set email(value){        
        this._email = value
    }


    get password(){             //getter - if someone wants to access/get the value then the value given
        return this._password.toUpperCase()
    }

    set password(value){        //setters - setting this value and we do not give return type in setters
        this._password = value
    }
}
const joy = new User("joy@ai","abc")
//console.log(joy.password)
console.log(joy.email)