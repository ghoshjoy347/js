console.log("2" > 1)
console.log("02" > 1) 


console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true, cos comparisons convert null to a number,treating it as 0.That's why null>=0 is true and null>0 is false

// ===(triple equals to) -> it doesn't only checks the values but checks it strictly,i.e its datatypes

console.log("2" == 2)// it converts the datatype to int from string ;thus its true
console.log("2" === 2)// it strictly checks the value as well as datatypes, here it's not matching thus its false