// Destructuring allows you to unpack values from arrays or properties from
// objects into distinct variables.

// Task 1: Use destructuring to assign the values "John" and "Doe" from the
// `fullName` array into separate variables `firstName` and `lastName`.
const fullName = ["John", "Doe"];

const [firstName, lastName] = fullName;

// Task 2: Destructure the `user` object below to create variables `name`
// and `age` using object destructuring.
const user = {
  name: "Alice",
  age: 25,
};

const { name, age } = user;

// Task 3: Print `firstName`, `lastName`, `name`, and `age` using console.log.
console.log(firstName);
console.log(lastName);
console.log(name);
console.log(age);

// Task 4: Write a function called `getFullName` that takes an object with properties
// `firstName` and `lastName`, and returns a string that combines them in the format
// "FirstName LastName". The function has to use destructuring.
const getFullName = ({ firstName, lastName }) => {
  return `${firstName} ${lastName}`;
};

// Task 5: Call the `getFullName` function with the `person` object and print
// the result using console.log.
const person = {
  firstName: "Jane",
  lastName: "Smith",
};

console.log(getFullName(person));
