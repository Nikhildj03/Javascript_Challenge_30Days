/*
Activity-3[Trapping Rain Water]
Task-3: Solve the "Trapping Rain Water" problem on Leetcode.
Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
Log the amount of trapped water for a few test cases.
*/

function trap(height) {
  if (height.length === 0) return 0;

  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let waterTrapped = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        waterTrapped += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        waterTrapped += rightMax - height[right];
      }
      right--;
    }
  }

  return waterTrapped;
}

// Test cases
let testCases = [
  { height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1] }, //output: 6
  { height: [4, 2, 0, 3, 2, 5] }, // output: 9
  { height: [1, 0, 1] }, // output: 1
  { height: [3, 0, 1, 3] }, // output: 4
  { height: [1, 2, 3, 4, 5] }, // output: 0
  { height: [] }, // output: 0
];

testCases.forEach((test, index) => {
  console.log(`Test Case ${index + 1}: Trapped water is ${trap(test.height)}`);
});
