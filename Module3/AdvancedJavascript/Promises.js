let promise1 = new Promise((resolve, reject) => {
  //code to write
  let x = Math.floor(Math.random() * 10);

  if (x % 2 == 0) resolve("Even number generated");
  else reject("Not an even number");
})

  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally completes the promise"));

console.log("syncronous code continues to execute...");
console.log("syncronous code continues to execute...");
console.log("syncronous code continues to execute...");
console.log("syncronous code continues to execute...");
console.log("syncronous code continues to execute...");
