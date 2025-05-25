let animal = { eats: true, sleeps: true, legs: 4, mammal: true };

//console.log(Object.getPrototypeOf(animal));
let obj = Object.getPrototypeOf(animal); //extract the parent information of animal
//console.log(Object.getOwnPropertyNames(obj));

let rabbit = { jumps: true };
Object.setPrototypeOf(rabbit, animal); //inherit from animal

/*for (let key in rabbit) {
  console.log(`key: ${key}, value is ${rabbit[key]}`);
}*/

let rabbit2 = { ...rabbit };
Object.setPrototypeOf(rabbit2, animal);
for (let key in rabbit2) {
  console.log(`key: ${key}, value is ${rabbit2[key]}`);
}

/*let mouse = Object.create(animal, {
  jumps: {
    value: true,
    enumerable: true,
  },
});

for (let key in mouse) {
  console.log(`key: ${key}, value is ${mouse[key]}`);
}*/
