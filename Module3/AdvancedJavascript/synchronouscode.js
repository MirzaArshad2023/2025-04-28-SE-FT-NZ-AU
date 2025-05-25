console.log("First");
setTimeout(() => console.log("0 timer message"), 0); //asynchronous code with no delay
setTimeout(() => console.log("Second"), 2000);
setTimeout(() => console.log("Third"), 3000);
console.log("Fourth");
let timerID = setTimeout(printHello, 1000, "Mirza");
setTimeout(sayHi, 4000);
console.log("Fifth");

function printHello(name) {
  console.log("Hello " + name);
}
function sayHi() {
  console.log("Hi!!");
  clearTimeout(timerID);
}
