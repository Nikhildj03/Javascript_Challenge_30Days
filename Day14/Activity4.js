// Getters and Setters

// task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName Property). Create an instance and log the full name using the getter.

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `Full Name is ${this.firstName} ${this.lastName}`;
  }

  set fullName(name) {
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

let p1 = new Person("Nikhil", "Kakade");

let fName = p1.fullName;
console.log(fName);

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full Name.

p1.fullName = "Kakade Nikhil";

let updatedName = p1.fullName;
console.log(updatedName);
