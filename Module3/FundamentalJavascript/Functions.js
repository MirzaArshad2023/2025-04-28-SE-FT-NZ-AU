function HelloWorld(name)
{
    console.log(`Hello ${name}`)
}

function IncrementData(number)
{
    number++
    number = number * 50
    return number
}

let result = IncrementData(2)
console.log(result)

// function checkAge returns a value when called
function checkAge(age) {
    if (age >= 18) {
    return 'adult'; // if the condition is true, return this string and exit
    }

    console.log("Processed")

    return 'non-adult'; // if the condition was false, return this string and exit
    }
    
console.log( checkAge(21) ) // adult
console.log( checkAge(13) ) // non-adult

console.log(checkAge(10))