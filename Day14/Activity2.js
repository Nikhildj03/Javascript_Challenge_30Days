// Activity 2 : Class Inheritance

// task 3 : Define a class Student that extends Person class. Add a property studentId and a method to return the studentId. Create an instance of the Student class and log the studentId.

class Person {
  constructor(studentId) {
    this.studentId = studentId;
  }

  displayStudentId() {
    return this.studentId;
  }

  greeting() {
    return console.log("Hello Students");
  }
}

class Student extends Person {
  greeting() {
    return console.log(`Hello student your Student is ${this.studentId}`);
  }
}

const objstudent = new Student(3366);
let id = objstudent.displayStudentId();
console.log(`Student id is ${id}`);

// task 4 : Override the greeting method in the student class to include the student Id in the message. Log the overriden greeting message.

let overidenMethod = objstudent.greeting();
