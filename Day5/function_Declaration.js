// Activity 1 : unction Declaration

// Task 1: Write a function to check if a number is even or off and log the result to the console.

function evenOrOdd(num) {
  num % 2 == 0 ? console.log(`${num} is  even `) : console.log(`${num} is Odd`);
}

// function calling
evenOrOdd(3);

// Task 2: Write a function to calculate the square of  number and return the result.

function square(num) {
  num *= num;
  return num;
}

let n1 = square(5);
console.log(n1);
