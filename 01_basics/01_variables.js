const accountId = 144001201
let accountEmail = "ghoshjoy@gmail.com"
var accountPassword =  "12345"
accountCity = "Kolkata"
let accountState

//  accountId = 2

console.log(accountId);

accountEmail = "joyghosh@gmail.com"
accountPassword = "987456"
accountCity = "Mumbai" 

/*
prefer not to use var, bcs of issue of block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity,accountState])