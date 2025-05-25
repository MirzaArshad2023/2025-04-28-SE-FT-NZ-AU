class Student {
  constructor(firstName, university) {
    this.firstName = firstName;
    this.university = university;
  }
  printStudentName() {
    console.log(`Full Name : ${this.firstName}`);
  }
  log() {
    console.log(`new object created`);
  }
}

let student1 = new Student();
let student2 = new Student();
