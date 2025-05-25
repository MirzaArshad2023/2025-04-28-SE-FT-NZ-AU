function FunctionFactory(x) {
  return function Sum(y) {
    return x + y;
  };
}

let result = FunctionFactory(10);

console.log(result(15));

function makeHeading(hTag) {
  // every call to makeHeading could have different values for hTag
  return (title) => {
    // unnamed closure function, can access value of hTag when created
    return `<${hTag}>${title}</${hTag}>`;
  };
}

let headerFactory = makeHeading("H1");
console.log(headerFactory("Hello World!"));
headerFactory = makeHeading("H2");
console.log(headerFactory("Second heading"));

console.log(FunctionFactory.name);
console.log(FunctionFactory.length);

function aggregate(x, y, z, k) {
  return x * y * z * k;
}

console.log(aggregate.length);

function FunctionCaller(originalFunction) {
  console.log("Function caller started");
  console.log(originalFunction.length);
  console.log(originalFunction.name);
  originalFunction();
}

//console.log(FunctionCaller(headerFactory));

function sayHiDefn() {
  console.log("Hi (function definition)");
} // named function
const sayHiExpn = function () {
  console.log("Hi (function expression)");
}; // named variable
const sayHiArrow = () => console.log("Hi (arrow function)"); // named variable

//.name property exists as a built-in default property for all functions
console.log(sayHiDefn.name); // sayHiDefn - uses explicit function name
console.log(sayHiExpn.name); // sayHiExpn - figures out name from context
console.log(sayHiArrow.name); // sayHiArrow - figures out name from context

function oneParam(a) {
  console.log("This function has a single parameter: " + a);
}
function twoParams(a, b) {
  console.log(`This function has two parameters: ${a} and ${b}`);
}
function manyParams(a, b, ...extras) {
  console.log(
    `This function has unlimited parameters: ${a} and ${b} and ${extras}`
  );
}

manyParams(1, 2, 4, 10, 123, 5342, 123);
console.log(oneParam.length); // 1
console.log(twoParams.length); // 2
console.log(manyParams.length); // 2, because extras is 'the rest' and can't be counted

function sayHi() {
  console.log("Hi");
  sayHi.counter++; // increment the custom counter property every time the function is called
}
sayHi.counter = 0; // initialise the counter to 0 before calling it

sayHi(); // Hi - calls the function and increments the counter
sayHi(); // Hi - calls the function and increments the counter again
sayHi();
sayHi();
sayHi();
console.log(`Called ${sayHi.name} ${sayHi.counter} times`); // Called sayHi 2 times
