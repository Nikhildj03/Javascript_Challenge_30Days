// Activity 3 : Grouping and  Capturing

//Task 5 Write a regular exoression to capture the area code, central office code, and line numder from a US phone number format/ eh (123) 456-7890. Log the captures.

const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
let usNumber = "(123) 456-7890";
let matches1 = usNumber.match(regex);
console.log(matches1);

//Task 6 Write a regular expression to capture the username and domain from an email address. Log the captures.

const regex2 = /(\w+)@(\w+)/;
let tempName = "RyanRenolds@gmail.com";
let matches2 = tempName.match(regex2);
console.log(matches2);
