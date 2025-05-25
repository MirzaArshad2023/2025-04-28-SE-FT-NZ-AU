let student = {}; //Object literals

let student1 = new Object();

console.log(student);
console.log(student1);

const user = {
  // user object contained within curly braces
  name: "joe", // string property with key 'name' and value 'joe'
  age: 20, // numeric property with key 'age' and value 20
  "has a dog": true, // multi-word property key 'has a dog' with boolean value true
  1: "one",
  2: "number two",
  true: "boolean true",
  2: "text two",
};

for (let key in user) {
  console.log(`user object key : ${key} and it's value is ${user[key]}`);
}

const phone = {
  model: "iPhone 11",
  colour: "black",
};

for (let k in phone) {
  console.log("Phone object Key = " + k);
  console.log("Phone object value = " + phone[k]);
}

/*
console.log(user.name);
console.log(user.age);
console.log(user["has a dog"]);

user.age = 21; // set (or assign) new value to object property called age

user.location = "NSW";

console.log(user);

delete user["has a dog"];
user["user has a cat"] = true;

console.log(user);



if (phone.colour) console.log(`My ${phone.model} is ${phone.colour}`); // prints message
if (phone.storage) {
  // undefined counts as false, so the below won't print
  console.log(`My ${phone.model} has ${phone.storage}GB`);
} else {
  console.log("Phone object doesn't have storage property");
}

let cameraStatus = phone.camera
  ? `My phone has ${phone.camera}`
  : `Phone doesn't have any camera`;

let fruits = ["Apple", "Banana", "Orange", "Pineapple", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
*/
