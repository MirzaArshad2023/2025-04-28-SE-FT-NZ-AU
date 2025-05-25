let {
  Country,
  lastName,
  location = "Sydney",
} = {
  firstName: "Bruce",
  lastName: "Wills",
  Country: "USA",
};

console.log(lastName);

console.log(Country);

console.log(location);

function PrintStudentDetails({ firstName, lastName }) {
  console.log(firstName);
  console.log(lastName);
}

let student = {
  firstName: "Wills",
  lastName: "Charles",
};
PrintStudentDetails({ firstName: "Mirza", lastName: "Arshad" });

let options = { width: 200, height: 100, title: "My Component" };
let { title, ...rest } = options;

console.log(title);
console.log(rest);
