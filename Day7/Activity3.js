// Activity 3 Nested Object

// Task 5: Create a nested Object representing a library with properties like name and books (an array od book object) and log the library object to the console.

let library = {
  name: "library1",
  book: [
    {
      title: "The Alchemist",
      author: "Paulo Co",
      year: 1998,
    },
    {
      title: "The Little Project",
      author: "Prince reader",
      year: 1943,
    },
  ],
};

console.log(library);

// Task 6: Access and log the name of the library and tittles of all the books in the library.

console.log(library.name);
library.book.forEach((book) => console.log(book.title));
