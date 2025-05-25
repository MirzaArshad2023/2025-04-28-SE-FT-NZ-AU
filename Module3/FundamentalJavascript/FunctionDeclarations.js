
HelloWorld("Bruce", "Wills")

//Function declaraion
function HelloWorld(name, lastname)
{
    //console.log(`Hello ${name} ${lastname}`)
    console.log(` Hello ${arguments[0]} ${arguments[1]}`)
}

const func1 = function(x, y)
{
    console.log(arguments)
    console.log("Hello function named expression")
}

func1(4, 5)
let x = func1

//func1()
//x()

const func2 = () => {
    console.log(arguments)
    console.log("I'm an arrow function")
    console.log("Second line")
}

const Sum = (a, b) => a + b
//func2()

console.log(Sum(5, 7))

function FunctionCaller(x, y)
{
    console.log("FUNCTION CALLER START")
    x()
    y()
    console.log("FUNCTION CALLER END")
}
func2()
//FunctionCaller(func1, func2)