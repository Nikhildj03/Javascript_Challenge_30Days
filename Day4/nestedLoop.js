// Activity 4 : Nested Loop

// Task 7 Write a program to print a pattern using nested for loops:

let n = 5;

for (let i = 1; i <= n; i++) {
  let pattern = "";

  for (let j = 1; j <= i; j++) {
    pattern += " * ";
  }

  console.log(pattern);
}
