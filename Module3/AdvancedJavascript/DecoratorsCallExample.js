function Student(firstName, company) {
  this.firstName = firstName;
  this.company = company;
}

let student1 = new Student("Mirza", "AUT");
let student2 = new Student("John", "UOA");

function Product(name, price) {
  this.name = name;
  this.price = price;
  this.salePrice = price * 0.9;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}

let cheese = new Food("cheese", 5);

console.log(
  `Name: ${cheese.name}, price: ${cheese.price}, saleprice: ${cheese.salePrice}, category: ${cheese.category}`
);
