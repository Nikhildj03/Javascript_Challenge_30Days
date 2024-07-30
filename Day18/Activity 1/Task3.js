//  Task 3 : Implement the quick sort algorithm to sort an array of numbers in asceding numbers. Log the sorted array.

function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

const array = [34, 7, 23, 32, 5, 62];
const sortedArray = quicksort(array);
console.log("Sorted Array:", sortedArray);
