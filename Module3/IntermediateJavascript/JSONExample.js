const student = {
  name: "Sita",
  age: 28,
  courses: ["HTML", "CSS", "JS"],
  occupation: null,
};
console.log(JSON.stringify(student));

const book = {
  title: "Gone With The Wind",
  printTitle() {
    // ignored
    console.log(this.title);
  },
  releaseDate: undefined, // ignored
};

console.log(JSON.stringify(book));

let University = {
  name: "UOA",
  location: "Auckland",
};

let Student = {
  firstName: "Mirza",

  university: University,
};

University.student = Student;

console.log(JSON.stringify(Student));
