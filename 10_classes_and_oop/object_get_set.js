const User = {
    _email: "jg@gmail.com",     //underscore here means, private......but according to the ES2020 private would be as #,where underscore is used now
    _password: "abc",


    get email(){                           // get - it basically means take and come from the memory
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    },


    get password(){                       // get - access
        return this._password.toUpperCase()
    },

    set email(value){
        this._password = value
    }


}

const joy = Object.create(User)
console.log(joy.email)
console.log(joy.password)