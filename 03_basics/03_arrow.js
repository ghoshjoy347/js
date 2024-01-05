const user = {
    username : "joy",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} welcome to the website`);  //'this' keyword refers to the current context 
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "ghosh" //here, the context,i.e.,the values have been changed
// user.welcomeMessage()

//console.log(this)



// function op() {
//     let username = "joy"
//     console.log(this.username); // here,it is undefined,hence "this" cannot be used in functions,but can only be used in objects
// }

// op()

till  5hr 40min