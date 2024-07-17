// Activity 2 Function Expression

// task 3 : Write a function expression to find the maximun of two numbers and log the result to the console.

function max(num1, num2) {
  num1 > num2
    ? console.log(`${num1} is the Maximum no`)
    : console.log(`${num2} is the Maximun No`);
}

max(10, 20);

// task 4: Write a function expression to concatenate two strings and return the result;

function concateString(str1, str2) {
  str3 = str1 + str2;
  return str3;
}

let s = concateString("Nikhil ", " Kakade");

console.log(s);
