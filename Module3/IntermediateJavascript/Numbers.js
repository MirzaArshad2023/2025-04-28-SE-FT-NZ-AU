const billion1 = 1000000000; // 9 zeros - hard to read
const billion2 = 1_000_000_000; // easier to read,

const billion3 = 1e9; // exponential format

console.log(billion1 === billion2); // true
console.log(billion2 === billion3); // true

const microSecs1 = 0.000001; // 6 decimal places - hard

const microSecs2 = 0.000_001; // easier to read,

const microSecs3 = 1e-6; // exponential format

console.log(microSecs1 === microSecs2); // true
console.log(microSecs2 === microSecs3); // true

const r = 0xff;
const g = 0xff;
const b = 0xff;

const white = `rgb(${r}, ${g}, ${b})`;
console.log(white); // rgb(255, 255, 255)
