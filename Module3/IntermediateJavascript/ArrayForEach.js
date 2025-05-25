const hobbits = ["Bilbo", "Frodo", "Samwise", "Merry", "Pippin"];

const fruits = ["Mango", "Banana", "Apples", "Oranges"];

hobbits.forEach((hobbit, index) => console.log(`#${index}: ${hobbit}`));

fruits.forEach((fruit, fruitIndex) =>
  console.log(`Fruit: ${fruit} stored at index: ${fruitIndex}`)
);
