let booleanValue = true

let convertedValue = String(booleanValue) //explicit conversion to a string type

let convertedNumber = String(456.789)

console.log(typeof booleanValue)
console.log(typeof convertedValue)

console.log(booleanValue)
console.log(convertedValue)
console.log(typeof convertedNumber)

console.log(typeof("1" + 2 + 3))
console.log(1 + 2 + "3")

console.log("6" / "2") // 3
console.log("6" * "2") // 12
console.log("6" - "2") // 4
console.log(+"6") // 6

console.log( Number(" 4 ") ) // 4 - trims spaces
console.log( Number(null) ) // 0 - intentionally empty value converts to 0
console.log( Number(undefined) ) // NaN - non-existent value is unknown
console.log( Number(false) ) // 0 - false converts to 0
console.log( Number(true) ) // 1 - true converts to 1
console.log( Number("") ) // 0 - empty string converts to 0
console.log( Number("not a number") ) // NaN - non-empty strings beginning with chars cannot convert

console.log( Boolean("") ) // false - empty string
console.log( Boolean(0) ) // false - zero value
console.log( Boolean(null) ) // false - no value
console.log( Boolean(undefined) ) // false - unknown value
console.log( Boolean(NaN) ) // false - not a number
console.log( Boolean("false") ) // true - non-empty string
console.log( Boolean(-1) ) // true - non-zero number