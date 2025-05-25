console.log("Synchornous code1");
console.log("Synchornous code2");

let promise1 = new Promise((resolve) => setTimeout(() => resolve(10), 4000));
promise1.then((result) => console.log(result));

await promise1;

console.log("Synchornous code3");
console.log("Synchornous code4");
console.log("Synchornous code5");

let waitForpromise = async () => {
  try {
    let promise1 = new Promise((resolve) =>
      setTimeout(() => resolve(10), 4000)
    );
    promise1.then((result) => console.log(result));

    let promiseResult = await promise1; // waits here as long as promise needs to resolve
    console.log(`Success: ${promiseResult}`); // then continues executing other code
    return true;
  } catch (error) {
    console.error(`Failure: ${error.message}`);
  }
  //only gets here if return true above did NOT happen, ie. there was an error
  return false;
};

waitForpromise();
