//const fbUser = new Object() // singleton obj

const fbUser = {} // non-singleton obj

fbUser.id = "1234"
fbUser.name = "Joy"
fbUser.isLoggedIn = false

//console.log(fbUser) output-->{ id: '1234', name: 'Joy', isLoggedIn: false }

const wpUser = {
    email:"fakejoy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "joyyy",
            lastname: "ghosh"
        }
    }
} 

console.log(wpUser.fullname.userfullname); //we can access objects inside objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"} 

//const obj3 = Object.assign(obj1,obj2)//alternate way to keep inside an object, this combines and put in a single key value pairs

const obj3 = {...obj1,...obj2} //... this is called as spread operator(maximum usage as compared to assign)
//console.log(obj3)

//syntax used to fetch values from databases and it comes generally in array of oobjects

const users = [
    {
        id: 1,
        email:"ghosh@gmail.com"
    },
    {
        id: 1,
        email:"ghosh@gmail.com"
    },
    {
        id: 1,
        email:"ghosh@gmail.com"
    },
]

users[1].email
console.log(fbUser);

console.log(Object.keys(fbUser))
console.log(Object.values(fbUser))
console.log(Object.entries(fbUser))//entries are less used
console.log(fbUser.hasOwnProperty('isLogged'))//does it contain inside it or not