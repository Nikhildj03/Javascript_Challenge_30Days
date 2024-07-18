// Activity 4 Array Iteration

// Task 10 Use a for loop to iterate over the array and log each element to the console.

let arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
console.log("**************************");

// Task 11 : Use the forEach method to iterate over the array and log each element and log each element to the console.

let m = arr1.forEach((value, i) => {
  console.log(value);
});

console.log(m);
