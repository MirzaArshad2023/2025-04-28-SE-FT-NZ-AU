Object.prototype.join = Array.prototype.join;

// define our own join() function for objects
const obj = {
  0: "Hello",
  1: "world",
  firstName: "I'm here",
  length: 3, // needed for join to work
};

console.log(obj.join());
let object2 = {
  0: "first",
  1: "second",
  length: 2,
};

console.log(object2.join());
