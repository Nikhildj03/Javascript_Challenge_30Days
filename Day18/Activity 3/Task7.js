// Task 7 Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstringWithoutRepeatingChars(str) {
  let maxLength = 0;
  let start = 0;
  const seenChars = new Map();

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];

    if (seenChars.has(currentChar)) {
      start = Math.max(seenChars.get(currentChar) + 1, start);
    }

    seenChars.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

const exampleString = "abcabcbb";
const lengthOfLongestSubstring =
  longestSubstringWithoutRepeatingChars(exampleString);
console.log(
  "Length of the longest substring without repeating characters:",
  lengthOfLongestSubstring
);
