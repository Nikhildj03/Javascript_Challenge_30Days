// Activity 4. Assertions and Boundaries

//Task 7 Write a regular expression to watch a word only if it is at the beginning of a string. Log the matches.

let regex = new RegExp(`^hello\\b`);
let string1 = "hello world";
let string2 = "world hello";
let match = string2.match(regex);
let matches = string1.match(regex);
console.log(matches);
console.log(match);

//Task 8 Write a regular expression to match a word only id it is at the end of a string . Log the matches.

let regex2 = new RegExp(`\\b(hello)$`);

let string3 = "hello world";
let string4 = "world hello";
let match1 = string2.match(regex2);
let matches1 = string1.match(regex2);
console.log(matches1);
console.log(match1);
