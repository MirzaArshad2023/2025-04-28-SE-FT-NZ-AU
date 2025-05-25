let student1 = {
  firstName: "Mirza",
  university: "UOA",
  country: "New Zealand",
};

let student2 = student1; //Copy the reference or address to the address but not the data itself

console.log(student1);
console.log(student2);

student2.country = "Australia";
student2.firstName = "xyz";

console.log(student1);
console.log(student2);

student1.country = "UK";
student1.firstName = "Bruce";

console.log(student1);
console.log(student2);
