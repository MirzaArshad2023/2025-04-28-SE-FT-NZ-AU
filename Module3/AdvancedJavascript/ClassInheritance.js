class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed} kph.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} stands still.`);
  }
}

class elephant extends Animal {
  shouts() {
    console.log("elephant shouts");
  }
}

class Rabbit extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  hide() {
    super.stop();
    // custom function, also inherits from Animal
    console.log(`${this.name} hides!`);
  }
  /*Overriding the run method in child class */
  run(speed) {
    super.run(speed);
    this.speed = 2 * speed;
    console.log(`Rabbit runs faster with ${this.speed}`);
  }
}
let bunny = new Rabbit("bunny"); // bunny contains properties and methods from Animal and Rabbit
let whiterabbit = new Animal("white Rabbit");
bunny.run(9); // bunny runs with speed 9 kph.
bunny.hide(); // bunny hides!
whiterabbit.run();

let elephant1 = new elephant("elephant");
elephant1.run(5);
elephant1.stop();
elephant1.shouts();
