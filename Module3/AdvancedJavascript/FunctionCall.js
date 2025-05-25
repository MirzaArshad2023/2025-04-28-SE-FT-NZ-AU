function isOdd(number) {
  return number % 2;
} // returns true if number is odd, false otherwise

function getOddNumbers() {
  //console.log(arguments);
  //return [].filter.call(arguments, isOdd); // arguments is context, isOdd is parameter for filter
  return [].filter.call(arguments, isOdd);
}

console.log(getOddNumbers(2, 4, 3, 7, 9, 11, 5, 2, 8));
