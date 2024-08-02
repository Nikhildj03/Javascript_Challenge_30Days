//   Task 2: solve the "reverse integer " problem on leetcode
// 1) write a function that takes an integer and returns it with its digits reversed.
// 2) handle edge cases like negative numbers and numbers ending in zero
// 3) log the reversed integers for a few test cases.

function reverse(n) {
  const isNegative = n < 0;
  let num = Math.abs(n);
  let reversed = 0;

  while (num > 0) {
    const digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  if (reversed > 2 ** 31 - 1) {
    return 0;
  }

  return isNegative ? -reversed : reversed;
}

console.log(reverse(-654897321));
