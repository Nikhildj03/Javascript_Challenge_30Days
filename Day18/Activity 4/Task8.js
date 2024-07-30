// Task 8  : Write a function to rotate an array by k positions. Log the rotated array.

function rotateArray(arr, k) {
  k = k % arr.length;

  let rotatedArray = arr.slice(-k).concat(arr.slice(0, -k));

  console.log(rotatedArray);

  return rotatedArray;
}

let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3;
let result = rotateArray(array, k);
