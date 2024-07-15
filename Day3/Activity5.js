// Activity 5 : Combining Conditions

// task 7 : Write a program to check if a year is leap year using multiple consitions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

let year = 2016;

if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {
  console.log("It is the Leap Year");
} else {
  console.log("It is not the Leap Year");
}
