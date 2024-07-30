// Implement the linear search algorithm to find a target value in an array. Log the index of the Target value.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const array = [10, 20, 30, 40, 50];
const targetValue = 30;
const index = linearSearch(array, targetValue);
console.log("Index of target value:", index);
