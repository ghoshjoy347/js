//const user = {
  //  username : "joy",
   // price : 999,

    //welcomeMessage : function() {
      //  console.log(`${this.username} welcome to the website`);  //'this' keyword refers to the current context 
        //console.log(this)
    //}
//}

// user.welcomeMessage()
// user.username = "ghosh" //here, the context,i.e.,the values have been changed
// user.welcomeMessage()

//console.log(this)



// function op() {
//     let username = "joy"
//     console.log(this.username) // here,it is undefined,hence "this" cannot be used in functions,but can only be used in objects
// }

// op()

// const opp = function () {
//     let username = "joy"
//     console.log(this.username) //undefined comes as a result
// }

// opp()

// const opp =  () => { //arrow func
//   let username = "joy"
//   console.log(this.username) //undefined comes as a result
// }

// opp()


//EXPLICIT RETURN
// const add = (num1,num2) => {  //basic arrow function
//   return num1+num2
// }
// console.log(add(3,4));


//IMPLICIT RETURN
// const add = (num1,num2) =>  num1+num2 //if curly brackets are used we need to write return ,but if there's no curly brackets then we dont need to write return
// console.log(add(3,4));


//returning an onject with arrow func.

//const add = (num1,num2) =>  {username:  "joy"} //here without parenthesis() it comes out as undefined, we cannot return object like this 
//console.log(add(3,4));

//const add = (num1,num2) =>  ({username:  "joy"}) 
//console.log(add(3,4)); //with parenthesis() it gives the correct value