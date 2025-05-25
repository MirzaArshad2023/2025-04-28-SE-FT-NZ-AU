let student = {
  firstName: "Mirza",
  Country: "New Zealand",
};
let student1 = {};

let student2 = { ...student, firstName: "Bruce", Country: "Australia" };

function User(first, last) {
  // constructor function
  this.first = first;
  this.last = last;
  this.hasShortName = () => this.first.length <= 3;
}

// we can create multiple users with different names
let user1 = new User("Tim", "Smith"); // need to use 'new'
console.log(user1);
let user2 = new User("Will", "Smith");
let user3 = new User("Tim", "Hortons");

function Student(firstName, country) {
  this.firstName = firstName;
  this.Country = country;
}

let student3 = new Student("Jeff", "smith");
let student4 = new Student("xyz", "abc");

class User2 {
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  hasShortName() {
    return this.first.length >= 3;
  }
}

let user4 = new User2("Tina", "Smith"); // need to use 'new'
console.log(user4); // User { first: 'Tina', last: 'Smith' }
console.log(user4.hasShortName()); // false
