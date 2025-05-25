let promise1 = new Promise((resolve, reject) => {
  resolve(true);
});

let promise2 = new Promise((resolve, reject) => {
  reject(false);
});

Promise.all([promise1, promise2]) //all promises to have succesful outcome for a positive final outcome
  .then((outcomes) => {
    console.log("Promise all");
    console.log(outcomes);
  })

  .catch((result) => {
    console.log("promise all");
    console.log(result);
  });

Promise.allSettled([promise1, promise2])
  .then((outcomes) => console.log(outcomes))
  .catch((result) => console.log(result));

Promise.race([promise1, promise2])
  .then((outcomes) => {
    console.log("promise race");
    console.log(outcomes);
  })
  .catch((result) => {
    console.log(result);
    console.log("promise race");
  });

Promise.any([promise1, promise2])
  .then((outcomes) => {
    console.log("Promise any..");
    console.log(outcomes);
  })
  .catch((result) => console.log(result));
