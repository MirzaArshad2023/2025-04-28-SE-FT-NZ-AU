const subjects = ["Maths", "Science", "History", "Geography"];

subjects.push("new subject"); //adding data to end of array

subjects.pop(); //remove the data from the end of array

subjects.unshift("subject1"); //add at begning of array

subjects.shift(); //remove element from beginning of array

//queue data structure
const queue = ["first", "second", "third", "fourth"];

queue.push("Fifth");
queue.push("Sixth");
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

//stack datastructure

const books = ["book1", "book2", "book3", "book4"];

books.push("book5");
books.push("book6");

console.log(books.pop());
console.log(books.pop());
console.log(books.pop());
console.log(books.pop());
console.log(books.pop());
console.log(books.pop());

const fruits1 = ["Apple", "Orange", "Pear"];
const fruits2 = [...fruits1]; // copy by data using spread syntax

console.log(fruits1);
console.log(fruits2);
fruits2.pop();
console.log(fruits1);
console.log(fruits2);

const matrix = [
  // 3x3 matrix
  [1, 2, 3], // row 0
  [4, 5, 6], // row 1
  [7, 8, 9], // row 2
];

console.log(matrix[1][1]); // 5, the value in row 1, column 1
console.log(matrix[2][2]);

console.log("the fruits are :" + fruits1);

let empty = [];

console.log("This is an empty array : " + empty);
