/ * Activity 2: Longest Substring Without Repeating Characters */;

//* Task 2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode.
// -> Write a function that takes a string and returns the length of the longest substring without repeating characters.
// -> Log the length for a few test cases, including edge cases.

function lengthOfLongestSubstring(s) {
  let lastIndex = new Array(256).fill(-1);
  let first = 0,
    len = 0;

  for (let second = 0; second < s.length; second++) {
    if (lastIndex[s.charCodeAt(second)] >= first) {
      first = lastIndex[s.charCodeAt(second)] + 1;
    }

    lastIndex[s.charCodeAt(second)] = second;
    len = Math.max(len, second - first + 1);
  }

  return len;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")
