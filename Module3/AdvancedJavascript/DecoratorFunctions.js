function PrintGreeting(name) {
  console.log("Hello, " + name);
}

function Sum(yx) {
  return x + y;
}

function Multiply(a, b) {
  a = a * 7;
  b = b + 4;

  return a * b;
}

function loggingTimingDecorator(originalFunction) {
  // decorator takes a function as parameter
  return function () {
    // and returns that function with extra bits - timing/logging
    console.time("Function timer"); // start a timer
    console.log(`\nExecuting function ...`); // log a message
    const result = originalFunction.apply(this, arguments); // execute the original function and store result
    console.timeEnd("Function timer"); // stop the timer
    return result; // return the result of running the original function
  };
}

let decoratedFunction = loggingTimingDecorator(PrintGreeting);

let decoratedSumFunction = loggingTimingDecorator(Sum);

let decoratedMultiply = loggingTimingDecorator(Multiply);

decoratedFunction("David");

console.log(decoratedSumFunction(10, 20));

let result = decoratedMultiply(5, 4);

console.log(result);
