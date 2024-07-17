// Activity 5 : Higher - Order Function

// Task 9: Write a higher order function that takes a funcion and a number , and call the function that many times.

let high = (a, b) => {
  for (let i = 0; i < b; i++) {
    a();
  }
};

high(() => console.log("HEllo"), 3); // call back function

// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value and then applies the second function to the result.

let h1 = (fuct1, fuct2, val) => {
  let result = fuct1(val);
  let result1 = fuct2(result);

  return result1;
};

let fuct1 = (x) => x + 1;
let fuct2 = (x) => x + x;

console.log(h1(fuct1, fuct2, 12));
