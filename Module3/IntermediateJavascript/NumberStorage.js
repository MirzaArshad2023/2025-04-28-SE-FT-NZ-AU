const toobig = 1e350; // 1 * 10350 - overflows storage

if (toobig <= Number.MAX_VALUE) {
  console.log("Number can be stored");
} else {
  console.log(
    "Number is too big. Maxium allowed number is " + Number.MAX_VALUE
  );
}

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);

const point1 = 0.1;
const point2 = 0.2;

console.log((point1 + point2).toFixed(2));

let largeNumber = 9_999_999_999_999_999;
console.log(largeNumber); //16 digits number
console.log(Number.MAX_SAFE_INTEGER);
