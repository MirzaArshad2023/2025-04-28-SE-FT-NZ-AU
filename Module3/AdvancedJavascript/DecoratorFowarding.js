function cachingDecorator(origFunction) {
  // decorator takes a function as parameter
  const cache = new Map(); // can also include outer environment variables via a closure

  return function () {
    // decorator returns same function with extra bits - caching
    if (cache.has(arguments)) {
      // if the key exists in the cache,
      console.log("returned cached value for " + x);
      return cache.get(arguments); // read and return the result from it
    }
    let result = origFunction.apply(this, arguments); // otherwise, call the original function and store the result
    cache.set(arguments, result); // then cache (remember) the result for next time
    return result;
  };
}

let worker = {
  getMultiplier() {
    return Math.floor(Math.random() * 1_000_000); // large random number
  },

  slow(x) {
    let random = 0,
      goal = x * this.getMultiplier(); // needs context to work
    for (let i = 0; i < goal; i++) random++;
    console.log(`worker.slow(${x}): randomly generated goal is ${goal}`);
    return random; // return large number
  },
};
//worker.slow(5);
//console.log(worker.getMultiplier());
let cachedDecoratorSlow = cachingDecorator(worker.slow.bind(worker));
cachedDecoratorSlow(5);
cachedDecoratorSlow(5);
