//if

// const isUserLoggedIn = true

// if ( 2 === "2"){            //"===" this checks the value ,and also the datatype 
//                            //"==" this checks the value ,and not its datatype, so int can be checked with string 
//     console.log("executed")
// }
// else{
//     console.log("not executed");
// }

//const balance = 1000

// if(balance < 500) {
//     console.log("less than 500")
// }
// else if (balance < 750) {
//     console.log("less than 750")
// }
// else if (balance < 900) {
//     console.log("less than 900")
// }
// else{
//     console.log("less than 1200")
// }

const UserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(UserLoggedIn && debitCard && 2==3){
    console.log("allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user login in");
}