const box1 = {
  size: "large",
  dimensions: { width: 50, length: 70, height: 30, units: "cm" },
  items: ["glasses", "plates", "cutlery"],
};

const box2 = JSON.parse(JSON.stringify(box1));

console.log(box2);
