// Activity 5 Practical Applications

//Task 9 Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

let regex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
let pass = "Hello$123";
let valid = pass.match(regex);
if (valid) {
  console.log("Password is valid");
} else {
  console.log("Password is not Valid");
}

//Task 10 Write a regular expression to validate URL. Log whether the URL is valid.

let regex1 = /^(https?:\/\/)?(www\.)?[\w-]+(\.[a-z]{2,}){1,2}$/;
const url = "https://www.google.com";
const isValid = url.match(regex1);
if (isValid) {
  console.log("url is valid");
} else {
  console.log("url is not valid");
}
