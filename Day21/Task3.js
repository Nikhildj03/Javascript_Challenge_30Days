//  Task 3: Solve the "Palindrome Number" problem on LeetCode
//   1) Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
//  2) Log the result for a few test cases, including edge cases like negative numbers.

function palindrome(str) {
  let isPalindrome = true;
  if (str.length < 2) {
    return isPalindrome;
  }
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] === str[j]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
    }
    i++;
    j--;
  }

  return isPalindrome;
}

console.log(palindrome("abcba"));
console.log(palindrome("abcbaab"));
