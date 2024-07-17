// Activity 4 Function Parameters and Default Values

// task 7 : Write a function that takes two parameter and returns their product. Provide a default value for the second parameter.

let product = (num1, num2) => {
  let pro = num1 * num2;

  return pro;
};

let f1 = product(5, 4);

console.log(f1);

// Task 8 : Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function nameAge(name, age = 18) {
  let a = `${name} welcome to Mumbai and Your Age is ${age}`;
  return a;
}

let n1 = nameAge("Nikhil");
console.log(n1);
