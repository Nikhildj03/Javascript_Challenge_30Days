// Activity 5: Valid Parentheses.
// Task 5: Solve the Valid Parentheses Problem on Leetcode.
// Write a function that takes a string containing just the characters '(', ')', '{' , '}' , '[' , ']' . and determines of the input string is valid .
// A string is valid if open bracker are closed in the correct order.
// Log the result for a few test cases.
var isValid = function (s) {
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const c of s) {
    if (Object.values(mapping).includes(c)) {
      stack.push(c);
    } else if (mapping.hasOwnProperty(c)) {
      if (!stack.length || mapping[c] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("(]{}"));
console.log(isValid("(){}[]"));
console.log(isValid("(}{][)"));
