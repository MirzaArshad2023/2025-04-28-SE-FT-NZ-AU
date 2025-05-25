let universities = ["AUT", "UOA", "MIT"];

let [first, second, third] = universities; //Destructing arrays

let [fourth, fifth, sixth = "Default", seventh = "Default"] = [
  "Apple",
  "Mango",
];

let [firstStudent, , , , thirdStduent] = [
  "Bruce",
  "Kent",
  "John",
  "abvc",
  "xyz1",
];

console.log(firstStudent, thirdStduent);

const [a, b, c] = "abc";

console.log(a, b, c);

const monarch = {}; // empty object
[monarch.title, monarch.name] = "King Charles".split(" "); // store array pieces in object properties
console.log(monarch); // { title: 'King', name: 'Charles' }

const teeProduct = {
  id: 1,
  title: "Sleeveless Tee",
  price: 23.95,
  category: "Shirts",
};
// key and value are just variable names, could be anything
for (let [key, value] of Object.entries(teeProduct)) {
  console.log(`${key}: ${value}`); // id: 1, title: Sleeveless Tee, price: 23.95 ...
}

let student = "James";
let teacher = "Andrew";

[student, teacher] = [teacher, student];
console.log(student, teacher);

const [
  jcFirst,
  jcLast,
  jcTitles,
  ,
  jcLocation = "Rome",
  jcKingdomType = "Democratic",
] = ["Julius", "Caesar", "Consul", "of the", "Roman"];

console.log(jcFirst, jcLast, jcTitles, jcLocation, jcKingdomType);
