// Task 9: Write a function to merge two sorted arrays into one sorted arrays. Log the merged array.

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (mergedArray[mergedArray.length - 1] !== arr1[i]) {
        mergedArray.push(arr1[i]);
      }
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (mergedArray[mergedArray.length - 1] !== arr2[j]) {
        mergedArray.push(arr2[j]);
      }
      j++;
    } else {
      if (mergedArray[mergedArray.length - 1] !== arr1[i]) {
        mergedArray.push(arr1[i]);
      }
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    if (mergedArray[mergedArray.length - 1] !== arr1[i]) {
      mergedArray.push(arr1[i]);
    }
    i++;
  }

  while (j < arr2.length) {
    if (mergedArray[mergedArray.length - 1] !== arr2[j]) {
      mergedArray.push(arr2[j]);
    }
    j++;
  }

  return mergedArray;
}

const array1 = [1, 3, 4, 5];
const array2 = [2, 4, 6, 8];
const mergedArray = mergeSortedArrays(array1, array2);
console.log(mergedArray);
