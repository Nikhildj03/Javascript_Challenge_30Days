// // Task:1 solve the "two sum" problem on leetcode .
// // 1) write a function that takes an array of numbers and a target number, adn returns the indices of the two numbers that add up t othe target .
// // 2) log the indices for a few test cases.

function twosum(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === target) {
          return `index of numbers that add upto ${target} are ${i} and ${j}`;
        }
      }
    }
    return `No two numbers add upto ${target}`;
  }
   console.log(twosum([2, 7, 11, 15], 9));