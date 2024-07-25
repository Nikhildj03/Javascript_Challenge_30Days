//  Activity 3 : Importing Entire Modules

// Task 5 : Create a module that exports multiple constant amd functions. Import the entire modules as an Object in another script and use its properties.

const sin30 = 0.5;
const cos60 = 0.5;

function addNumber(a, b) {
  return a + b;
}

function greet() {
  return "Hello World";
}

export { sin30, cos60, addNumber, greet };
