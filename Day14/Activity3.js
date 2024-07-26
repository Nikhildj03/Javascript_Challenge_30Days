// Activity 3 Static Methods and properties

// Task 5: Add a static method to the person class that returns a generic message. Call this static method without creating an instance of the class and log the message.

class Person {
  static studentsCount = 0;

  constructor(name, age) {
    this.age = age;
    this.name = name;
    Person.studentsCount++;
  }

  static greeting() {
    return "Hello Good Morning";
  }

  static displayStudentCount() {
    console.log(`Total Numbers of students: ${Person.studentsCount}`);
  }
}

let greet = Person.greeting();
console.log(greet);

// Task 6: Add a static property to the Student class to keep track of the number of students created. Incremental this property in the constructor and log the total numbers of students.

let p1 = new Person("Dj", 21);
let p2 = new Person("Dj", 21);
let p3 = new Person("Dj", 21);
let p4 = new Person("Dj", 21);
let p5 = new Person("Dj", 21);

const count = Person.displayStudentCount();
