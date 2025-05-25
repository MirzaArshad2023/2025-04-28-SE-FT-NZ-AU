let obj = {};
console.log(Object.getPrototypeOf(obj) === Object.prototype);
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(obj)));

let arr = [];
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(arr)));

let newDate = new Date();
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(newDate)));
