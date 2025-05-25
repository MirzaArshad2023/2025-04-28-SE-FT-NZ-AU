/* Array of objects */
const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
  { id: 2, title: "Kid's Hoodie", price: 154.95, category: "Winter" },
  { id: 2, title: "Teen's Hoodie", price: 104.95, category: "Winter" },
  { id: 2, title: "Women's Hoodie", price: 174.95, category: "Winter" },
];

let itemFound = products.find((product) => product.category == "Winter");

console.log(itemFound);

let itemsFound = products.filter((product) => product.category == "Winter");

console.log(itemsFound);

let itemsUnder50dollar = products.filter((product) => product.price <= 50);
console.log(itemsUnder50dollar);
