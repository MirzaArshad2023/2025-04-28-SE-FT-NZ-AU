const names = new Set(["Pedro", "Oliver", "Jack", "Mateo"]);

let categoryArray = [
  "Electronics",
  "Jewellery",
  "Men's Clothing",
  "Women's Clothing",
  "Electronics",
  "Jewellery",
  "Women's Clothing",
];

console.log(names);
names.add("Bruce");
names.add("Willy");
console.log(names);

console.log(names.has("Oliver"));
console.log(names.size);
console.log(names.delete("Bruce"));
names.clear();
console.log(names);

let uniqueCategories = new Set(categoryArray);
console.log(uniqueCategories);

for (let category of uniqueCategories) console.log(category);
