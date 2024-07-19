// Activity 2 Object Methods

// task 3 : Add a method to the book object that returns a string with the book title and author, and log the result of calling the method

let book = {
  title: "Playing it my way",
  author: "Sachin Tendulkar",
  year: 2020,

  funct: function () {
    console.log(`Book title is ${this.title} and author is ${this.author}`);
  },
};

console.log(book.funct());

// Task 4 : Add a method to the book object that takes a parameter (year) and updates the book 's year property then log th updated object.

let book1 = {
  title: "Playing it my way",
  author: "Sachin Tendulkar",
  year: 2020,

  funct: function (yr) {
    this.year = yr;
    console.log(
      `Book title is ${this.title} and author is ${this.author} and the book year is ${this.year}`
    );
  },
};

console.log(book1.funct(2010));
