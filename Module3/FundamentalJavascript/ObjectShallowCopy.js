const user = { name: "Elliot", age: 27 };

const userClone = {}; // empty object, refers to different memory location

const userClone2 = { ...user };

for (let key in user) {
  // iterate over user properties
  userClone[key] = user[key]; // re-create them in userClone
}

console.log(userClone); // { name: 'Elliot', age: 27 }
userClone.name = "Mirza";

console.log(userClone);
console.log(user);

user.name = "Bruce";

console.log(user);
console.log(userClone2);

let person = { name: "Peter", location: "Auckland" };

let person2 = {
  ...person,
  name: "Jackson",
  location: "Sydney",
  "has a cat": "false",
};

console.log(person2);

const vehicle = { make: "Toyota", model: "Camry" };
const mergedUser = { ...user, ...vehicle, ...person };

console.log(mergedUser);

let Customer = {
  name: "Paul",
  address: {
    unit: 80,
    street: "westney road",
    country: "xyz",
  },
};

let Customer2 = JSON.parse(JSON.stringify(Customer)); //Deep copy

console.log(Customer);
console.log(Customer2);

Customer.address.street = "Avondale";
Customer.address.unit = "50";

console.log(Customer);
console.log(Customer2);
