const products = [
  {
    id: 1,
    title: "Sleeveless Tee",
    price: 23.95,
    category: "Shirts",
    quantity: 12,
  },
  {
    id: 2,
    title: "Men's Hoodie",
    price: 54.95,
    category: "Winter",
    quantity: 2,
  },
  { id: 3, title: "Denim Jeans", price: 49.95, category: "Pants", quantity: 4 },

  {
    id: 2,
    title: "Kid's Hoodie",
    price: 154.95,
    category: "Winter",
    quantity: 3,
  },
  {
    id: 2,
    title: "Teen's Hoodie",
    price: 104.95,
    category: "Winter",
    quantity: 1,
  },
  {
    id: 2,
    title: "Women's Hoodie",
    price: 174.95,
    category: "Winter",
    quantity: 2,
  },
];

let totalPrice = products.reduce(
  (productTotalPrice, product) => productTotalPrice + product.price,
  0
);

let totalQuantity = products.reduce(
  (producttotalquantity, product) => producttotalquantity + product.quantity,
  0
);

console.log(totalPrice);
console.log(totalQuantity);

let filteredTitles = products
  .filter((product) => product.price > 25)
  .map((product) => product.title);

console.log(filteredTitles);

let descendingOrderedTitlesandIds = [...products]
  .sort((product1, product2) => product1.price - product2.price)
  .reverse()
  .map((product) => ({ id: product.id, title: product.title }));

console.log(descendingOrderedTitlesandIds);
