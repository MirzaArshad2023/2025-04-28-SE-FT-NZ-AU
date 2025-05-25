if ("") 
    console.log('empty string is true') // implicit "" conversion to false - won't print msg
else
    console.log('empty string is false')

if (undefined) 
    console.log('undefined is true') // implicit conversion to false - won't print msg
else
    console.log('undefined is false')

let x = 10
let y = 11

let student = {
    firstName: "mirza",
    country: "New Zealand"
}
let student1
student1 ? console.log("student is not null") : console.log("student is null")

console.log( !undefined ) // true - convert value to boolean then negate it (opposite)
console.log( !!"" ) // false - convert value to boolean then negate/toggle twice

console.log("The" > "There")