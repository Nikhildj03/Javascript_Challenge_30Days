/* Day-23[LeetCode Hard]

Activity-1[Median of Two Sorted Arrays]
Task-1:Solve the "Median of Two Sorted Arrays" problems on Leetcode.
Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
Log the median for a few test cases, including eddge cases. 
*/

function findMedianSortedArrays(nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;
  if (len1 > len2) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let left = 0;
  let right = len1;
  let combinedLen = len1 + len2;

  while (left <= right) {
    let partition1 = Math.floor((left + right) / 2);
    let partition2 = Math.floor((combinedLen + 1) / 2) - partition1;

    let maxLeft1 =
      partition1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partition1 - 1];
    let minRight1 =
      partition1 === len1 ? Number.POSITIVE_INFINITY : nums1[partition1];

    let maxLeft2 =
      partition2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partition2 - 1];
    let minRight2 =
      partition2 === len2 ? Number.POSITIVE_INFINITY : nums2[partition2];

    if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
      if (combinedLen % 2 === 0) {
        return (
          (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
        );
      } else {
        return Math.max(maxLeft1, maxLeft2);
      }
    } else if (maxLeft1 > minRight2) {
      right = partition1 - 1;
    } else {
      left = partition1 + 1;
    }
  }

  throw new Error("Input arrays are not sorted.");
}

// Test cases
let testCases = [
  { nums1: [1, 3], nums2: [2] }, // Median is 2.0
  { nums1: [1, 2], nums2: [3, 4] }, // Median is 2.5
  { nums1: [0, 0], nums2: [0, 0] }, // Median is 0.0
  { nums1: [], nums2: [1] }, // Median is 1.0
  { nums1: [2], nums2: [] }, // Median is 2.0
  { nums1: [1, 2], nums2: [1, 1] }, // Median is 1.0
];

testCases.forEach((test, index) => {
  console.log(
    `Test Case ${index + 1}: Median is ${findMedianSortedArrays(
      test.nums1,
      test.nums2
    )}`
  );
});
