// Activity 1 Basic Regular Expressions

//Task 1 Write a regular expression to match a simple pattern (eg match all occurrences of the word "Javascript" in a string). Log the matches.

const regex = /JavaScript/g;
let string =
  "JavaScript is one of the most usefull CS Language. I love to use JavaScript";

const matches = string.match(regex);
console.log(matches);

//Task 2 Write a regular expression to match all digits in a string, Log the matches.

const regex2 = /\d/g;
let testString =
  "123 is a number and 321 is also a number but they are different";
const matches2 = testString.match(regex2);
console.log(matches2);
