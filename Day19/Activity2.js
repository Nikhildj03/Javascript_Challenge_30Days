// Activity 2 : Character Classes and Quantifiers.

//Task 3 Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

let regex = /[A-Z]/g;
const string1 = "Hello Guys How Are You";
let matches = string1.match(regex);
console.log(matches);

//Task 4 Wite a refular expression to match all sequences of one or more digits in a string. Log the matches.

let regex2 = /\d+/g;
const string2 = "this is 123 and this is 321 and this is 213";
let matches2 = string2.match(regex2);
console.log(matches2);
