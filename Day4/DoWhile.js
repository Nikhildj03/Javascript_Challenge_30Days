// Activity 3 : Do while  Loop

// Task 5: Write a program to print the numbers from 1 to 5 using a do .. while loop

let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// task 6 : Write a program to calculate the factorial of a number using a do ... while loop.

let n = 5;
let factorial = 1;
let j = 2;

do {
  factorial = factorial * j;
  j++;
} while (j <= n);

console.log(factorial);
