let octalNumber = 0o2102474671;

console.log(octalNumber);

const mobile = 0o41234567;
const mobiletext = "041234567";

const binary = 0b11111111; // binary form of 255
const octal = 0o377; // octal form of 255

console.log(binary); // 255
console.log(binary === octal); // true

let x = 255;

console.log(x.toString(16));
console.log(x.toString(8));
console.log(x.toString(2));

const ff = 255;
const ee = 238;
const dd = 221;

//convert from rgb colour code to hexadecimal
console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`); // #ffeedd
