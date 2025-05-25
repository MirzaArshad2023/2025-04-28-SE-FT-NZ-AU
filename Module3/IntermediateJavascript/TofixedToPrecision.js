const n = 1.23456; // primitive floating point number
console.log(n.toFixed(4)); // 1.23 - fixed to 2 decimal places
console.log(n.toPrecision(10)); // 1.234560000 - fills or rounds to the exact number of digits

const hello = "hello world"; // primitive string
console.log(hello.toUpperCase()); // HELLO WORLD
console.log(hello.endsWith("world")); // true

const user = {
  name: "John",
  toString() {
    return this.name;
  },
};

console.log(user);

console.log("The name of the person is " + user);

const Apple = {
  color: "green",
  quantity: 10,
  valueOf() {
    return this.quantity;
  },
};

let totalFruits = 10 * Apple;

console.log(totalFruits);
