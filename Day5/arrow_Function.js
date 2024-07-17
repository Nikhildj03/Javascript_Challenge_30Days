// Activity 4 Arrow Function

// Task 5 : Write a arrow function to calculate the sum of the two numbers and returns the result.

let f1 = (num1, num2) => num1 + num2;

let result1 = f1(5, 5);
console.log(result1);

// task 6 : Write an arrow function to check if a string contains a specific character and return a boolean.

let str = "Nikhil";
let char = "i";

let containsCharacter = (inputString, targetChar) => {
  return inputString.includes(targetChar);
};

console.log(containsCharacter(str, char));
