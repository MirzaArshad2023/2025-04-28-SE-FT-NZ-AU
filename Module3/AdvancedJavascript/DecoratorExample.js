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

function cachingDecorator(origFunction) {
  // decorator takes a function as parameter
  const cache = new Map(); // can also include outer environment variables via a closure

  return function () {
    // decorator returns same function with extra bits - caching
    if (cache.has(arguments)) {
      // if the key exists in the cache,
      console.log("returned cached value for " + x);
      return cache.get(x); // read and return the result from it
    }
    let result = origFunction.apply(this, arguments); // otherwise, call the original function and store the result
    cache.set(x, result); // then cache (remember) the result for next time
    return result;
  };
}

function slow(x) {
  // there can be a time-consuming job here, like adding up to a large number
  let random = 0;
  let goal = Math.floor(Math.random() * x * 1_000_000); // random large number
  console.log(
    `slow(${x}): randomly generated goal for ${x * 1_000_000} is ${goal}`
  );
  for (let i = 0; i < goal; i++) random++;
  return random; // return large number after counting to it
}

let cachingDecorated = cachingDecorator(slow);
let loggingCachedDecorator = loggingTimingDecorator(cachingDecorated);

loggingCachedDecorator(5); //first time called. Data will be added to cache
loggingCachedDecorator(5); //second time called, data will be fetched from cache and will be faster
