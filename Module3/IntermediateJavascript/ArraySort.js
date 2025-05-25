let numbers = [10, 234, 12, 3, 123, 134];
numbers.sort((n1, n2) => n1 - n2);

console.log(numbers);

const products = [
  { id: 1, title: "Sleeveless Tee", price: 23.95, category: "Shirts" },
  { id: 2, title: "Men's Hoodie", price: 54.95, category: "Winter" },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants" },
  { id: 2, title: "Kid's Hoodie", price: 154.95, category: "Winter" },
  { id: 2, title: "Teen's Hoodie", price: 104.95, category: "Winter" },
  { id: 2, title: "Women's Hoodie", price: 174.95, category: "Winter" },
];

let sortedProducts = [...products].sort(
  (product1, product2) => product1.price - product2.price
);
console.log(products); //original products
console.log(sortedProducts);

let sortedProductByTitle = [...products].sort((product1, product2) =>
  product1.title > product2.title ? 1 : -1
);

console.log(sortedProductByTitle);
