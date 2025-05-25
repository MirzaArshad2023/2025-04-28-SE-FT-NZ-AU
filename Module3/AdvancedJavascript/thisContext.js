const user = {
  name: "John",
  sayHi() {
    console.log(`Hi, ${this.name}`);
  },
};

//setTimeout(user.sayHi, 2000);
setTimeout(() => user.sayHi(), 2000);

setTimeout(user.sayHi.bind(user), 2000);
