function makeArray() {
  console.log(arguments);
  return Array.from(arguments);
}

console.log(makeArray(1, 21, 15, 123, 45, 23));

let sampleString = "Hello";

console.log(Array.from(sampleString));
