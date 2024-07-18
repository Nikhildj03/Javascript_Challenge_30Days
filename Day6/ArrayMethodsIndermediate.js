// Activity 3 Array Methods (Intermediate)

// task 7 : Use the map method to create a new array where each number is doubled and log the new array.

let arr1 = [1, 2, 3];
let doubled = [];
console.log(arr1.length);

let m = arr1.map((value, index, arr1) => {
  doubled[index] = index * 2;
});

console.log(doubled);

// task 8: Use the filter method to create a new array with only even numbers and log the new array.

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let arrayFilter = arr2.filter((value, i) => {
  return value % 2 == 0;
});

console.log(arrayFilter);

// task 9 : Use the reduce method to calculate the sum of all numbers in the array and log the result.

let arrSUm = arr1.reduce((acc, currentValue) => {
  //   console.log(acc, currentValue);
  return acc + currentValue;
});

console.log(arrSUm);
