function User(email,password) {
        this._email = email                 // without underscore answer won't come            
        this._password = password           // without underscore answer won't come

    Object.defineProperty(this,'email',{
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email = value
    }
})
    Object.defineProperty(this,'password',{
    get: function(){
        return this._password.toUpperCase()
    },
    set: function(value){
        this._password = value
    }
})

}
const joy =  new User("joyop@gmail","bubble")
console.log(joy.email);