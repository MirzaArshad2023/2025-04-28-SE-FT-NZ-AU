const sometext = "I could be anything you like";

console.log(sometext.length);
console.log(sometext.toUpperCase());
console.log(sometext.toLowerCase());
console.log(sometext.substring(8, 20));
console.log(sometext.indexOf("anything"));

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.startsWith("quick"));
console.log(sentence.endsWith("dog."));
console.log(sentence.includes("jumps"));

if (sentence.indexOf("mirza") > 0) {
}

console.log(sentence.split(" "));

console.log(sentence.slice(4, 10));
console.log(sentence.replace("quick", "slow"));

console.log(" extra spaces ".trim());
