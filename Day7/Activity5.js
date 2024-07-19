// Activity 5 Object Iteration

// task 8 : Use a for ..in loop to iterate over the properties of the book object and log each properties and its value.

let book = {
  title: "The Alchemist",
  author: "Paulo Co",
  year: 1998,
  genre: "Adventure",
  pages: 208,
};

for (let key in book) {
  console.log(`${key} : ${book[key]}`);
}

// task 9 Use Objects.keys and Object.values method ti log all the keys and values of the object.

console.log(Object.keys(book));
console.log(Object.values(book)); // return type is array
