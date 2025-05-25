const animalsArr = ["tiger", "lion", "elephant", "giraffe"];
for (let animal of animalsArr) {
  console.log(animal);
} // prints each animal in turn

const animalObjArray = [
  { name: "tiger", genus: "panthera", class: "mammal" },
  { name: "tiger", genus: "panthera", class: "mammal" },
  { name: "tiger", genus: "panthera", class: "mammal" },
];

for (let property of animalObjArray) {
  console.log(property.name);
} // TypeError: animalObj is not iterable

let animalObj2 = { name: "tiger", genus: "panthera", class: "mammal" };
for (let key in animalObj2) {
  console.log("Key: " + key + " value : " + animalObj2[key]);
}
