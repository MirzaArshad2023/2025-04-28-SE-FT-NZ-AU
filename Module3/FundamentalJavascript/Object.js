let student1 = {
  
    firstName: "Bruce",
    Country: "Australia",
    City: "Sydney",
    DOB: "01-01-1990",
    10: "ten",
    false: "negative statement",
    "has a dog": true,
    Add: function sum(a, b)
    {
        return a + b;
    }
}

console.log(student1.firstName)
console.log(student1["Country"])
console.log(student1["has a dog"])

student1.firstName = "Wills"
student1.lastName = "Smith"

console.log(student1)