let studentsMap = new Map();

let newObject = {};

studentsMap.set("firstName", "Mirza");
studentsMap.set(true, "truth");
studentsMap.set(newObject, 123);

console.log(studentsMap);
console.log(studentsMap.size);
console.log(studentsMap.has(newObject));

console.log(studentsMap.get(newObject));
console.log(studentsMap.get("firstName"));

studentsMap.delete(true);
console.log(studentsMap);
studentsMap.clear();
console.log(studentsMap);

const recipeMap = new Map([
  ["flour", "1 cup"],
  ["milk", "1/2 cup"],
  ["eggs", 2],
  ["butter", "50g"],
]);

for (let key of recipeMap.keys()) {
  console.log(`Map key: ${key} and value is ${recipeMap.get(key)}`);
}

for (let value of recipeMap.values()) {
  console.log(`Map values: ${value}`);
}

for (let entry of recipeMap.entries()) {
  console.log(entry);
}

const priceMap = new Map([
  ["banana", 1],
  ["pineapple", 2],
  ["watermelon", 5],
]);

const priceObject = Object.fromEntries(priceMap);
console.log(priceObject); // { banana: 1, pineapple: 2, watermelon: 5 }

let studentObj = {
  firstName: "Bruce",
  university: "Curtin",
  country: "Australia",
};
console.log(studentObj);
let studentMap = new Map(Object.entries(studentObj));
console.log(studentMap);
