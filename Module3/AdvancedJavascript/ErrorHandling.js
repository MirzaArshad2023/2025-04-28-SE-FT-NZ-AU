let firstName = "latin Name";
try {
  getPersonDetails("Mirza");
  function getPersonDetails(firstName) {
    return "Details of the person are " + firstName;
  }
  getPersonDetails2(firstName);
} catch (error) {
  console.log("Error occurred:" + error);
} finally {
  console.log("Code executed first stage");
  console.log("Code executed first stage");
  console.log("-----FINISHED DONE CODING----------");
}

try {
  const error = "mismatched quotes";
} catch (error) {
  console.log("will not catch above error");
}

try {
  noSuchVariable;
} catch (error) {
  // error is just a variable name. 'error', 'err' or 'e' are all commonly used
  console.log("caught an error: " + error.message); // all errors have a message property
}

try {
  setTimeout(() => noSuchVariable, 1000);
} catch (error) {
  // error is just a variable name. 'error', 'err' or 'e' are all commonly used
  console.log("only synchronous errors! " + error.message); // all errors have a message property
}
console.log(
  "prints synchronous code then throws uncaught asynchronous error after 1 sec"
);
