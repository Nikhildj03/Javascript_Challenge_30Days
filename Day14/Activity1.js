// Activity 1: Class defination

// Task 1 : Define a class Person with properties name and age , and a method to return a greeting message. Create an instance of the class and log the greeting message.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return console.log(`Welcome ${this.name} `);
  }

  updatedAge(upateAge) {
    this.age = upateAge;
    console.log(this.age);
  }
}

let p1 = new Person("Nikhil", 20);
console.log(p1);
let g1 = p1.greeting();

// Task 2 Add a method to the Person class that updates the age property and logs the updated age.

p1.updatedAge(18);
