let isEverythingok = 100
const country = "Australia"


let cities = ["Sydney", "Melbourne", "Auckland", "Wellington"] //Array (example of a list)

console.log(cities)
console.log(cities[0])
console.log(cities[1])
console.log(cities[2])

let randomValues = ["Mirza", 100, false, null, undefined]
console.log(randomValues)

function PrintHelloWorld()
{
    console.log("Hello World")
    console.log("Im printing the javascript code to console")
    console.log("to demonstrate node js")    
}

function GreetSomeone(name)
{
    
    let isCalled = 0
    console.log("Welcome: " + name)
    isEverythingok = 70
    if(true)
    {
        isCalled = 1
        city = "Melbourne"
    }
    
    console.log(isCalled)
}

GreetSomeone("Mirza")

function SUM(a, b)
{
    isEverythingok = 50
    return a * b
}

let result = SUM(1, 4)
isEverythingok = 60
console.log(result)
console.log(SUM(50, 2))

//console.log(SUM(SUM(2, 3), SUM(5, 1)))
