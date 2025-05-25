let animal = { mammal: true, eats: true, sleeps: true, legs: 4 };
function Rabbit(name) {
  // constructor function, first letter capitalised by convention
  this.jumps = true;
  this.name = name;
}

Rabbit.prototype = animal;

let whiterabbit = new Rabbit("white");
let blackrabbit = new Rabbit("black");

for (let key in whiterabbit) {
  console.log(`key: ${key}, value is ${whiterabbit[key]}`);
}

for (let key in blackrabbit) {
  console.log(`key: ${key}, value is ${blackrabbit[key]}`);
}
