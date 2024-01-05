
a = 100 // here,it is "GLOBAL Variable"

if(true){ //this is not object,but this is the scope
    let a = 10 //'let' allows only inside a scope(also here, 'a' is a local variable)

    const b = 20 //'const' allows only inside a scope

    var c = 30 //'var' allows outside the scope as well, hence it creates issues so we generally avoid it

}

//console.log(a)
//console.log(b)
//console.log(c)


function one(){           //parent func.
    const username = "joy"

    function two(){       //child func.,it can access parent func.
        const website = "youtube"
        console.log(username);
    }
   // console.log(website);

    two()
}

//one()

if (true) {
    const username = "joy"
    if(username == "joy"){
        const website = " whatsapp"
        console.log(username + website);
    }
    //console.log(website) //not in scope ,so no access
}

//console.log(username) //not in scope ,so no access


//------------------------------------------------------

function addOne(num){  //one way to write a function
    return num + 1    //in this case we can access 'addOne', before declaration
}

addOne(4)

const addTwo = function(num){  //other way to write a function
    return num + 2            //in this case we cannot access 'addTwo', before declaration or else it would give errors 
}

addTwo(6)