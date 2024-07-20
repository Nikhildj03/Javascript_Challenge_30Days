// Activity 2 : Destructuring

// task 3: Use array destructuring to extract the first and second element from and array of numbers and log them to the console.

let x = [1, 2, 3, 4, 5, 6];

let [y, z] = x;

console.log(y);
console.log(z);

// task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let obj = {
  tittle: "Playing It in my ways",
  author: "Sachin Tendulkar",
  year: 2014,
  publication: null,
};

const { tittle, author } = obj;
console.log(tittle);
console.log(author);
