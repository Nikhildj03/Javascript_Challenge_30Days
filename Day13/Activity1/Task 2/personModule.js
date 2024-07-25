// Task 2 : Create a module that exports an object represeting a person with properties and methods. Import and use this module in another script.

const person = {
  name: "Nikhil",
  age: 22,
  greet() {
    console.log(`My name is ${this.name} and age is ${this.age}.`);
  },
};
export { person };
