// Task 5 Implementing the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
}

const sortedArray = [3, 6, 8, 12, 14, 18, 21, 24, 27, 30];
const targetValue = 18;
const index = binarySearch(sortedArray, targetValue);
console.log("Index of target value:", index);
