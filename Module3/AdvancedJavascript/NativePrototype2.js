String.prototype.show = function () {
  console.log(this);
};

"Mirza".show();
let newString = "Boom";
newString.show();

if (!String.prototype.repeatN) {
  // if there's no such function in the prototype already
  String.prototype.repeatN = function (n) {
    // define a repeat function to repeat the string n times
    return new Array(n).join(this); // uses the string ('this') as glue to join n empty array items
  };
}
console.log("La".repeatN(4)); // LaLaLa
