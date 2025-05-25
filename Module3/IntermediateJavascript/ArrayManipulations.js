const sliceArray = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
const sliced = sliceArray.slice(0, 3); // start at the beginning, get items up to index 3
console.log(sliced);

const lastItems = sliceArray.slice(-3);

//console.log(lastItems);

const spliceArray = ["I", "study", "JavaScript", "right", "now"];

let itemsToReplace = ["I", "like", "Javascript"];

const splicedArray = spliceArray.splice(0, 3, "I", "like", "Javascript");

//console.log(splicedArray);
//console.log(spliceArray);

let splicedArray2 = spliceArray.splice(2, 4, "Hello");

console.log(splicedArray2);
console.log(spliceArray);
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const combined = array1.concat(array2, array3);
console.log(combined); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(combined.concat(10, 11)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
console.log(combined.concat(12));

const marks = ["A+", "C+", "B-", "B-", "B+", "C+"];

console.log(marks.indexOf("B-"));
console.log(marks.lastIndexOf("B-"));

const elements = ["Wind", "Water", "Fire", "Air"];

console.log(elements.join());
console.log(elements.join(";"));
console.log(elements.join(" "));
