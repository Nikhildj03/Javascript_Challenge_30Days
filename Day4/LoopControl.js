// Activity 5 : Loop Control Statements

// Task 8: Write a program to print number from 1 to 10, but skip the number 5 using the continue statement.

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    continue;
  } else {
    console.log(i);
  }
}

// Task 9: Write a program to print numbers from 1 to 10 , but stop the loop when the number is 7 using the break statement.

for (let i = 0; i <= 10; i++) {
  if (i == 7) {
    break;
  } else {
    console.log(i);
  }
}
