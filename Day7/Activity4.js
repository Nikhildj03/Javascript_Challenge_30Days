// Activity 4: The this keyword

// task 7 : Add a method to the book that uses the this keyword to return a string with the book's tiitle and year and log the result of calling this method

let book1 = {
  title: "Playing it my way",
  author: "Sachin Tendulkar",
  year: 2020,

  funct: function () {
    return `Book title is ${this.title} and author is ${this.author} and the book year is ${this.year}`;
  },
};

let output = book1.funct();
console.log(output);
