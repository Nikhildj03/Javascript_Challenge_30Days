// Task 6 : Write a function to count the occurences of each character in a string. log the character counts.


function countCharacterOccurrences(str) {
    const charCount = {};
  
    for (let char of str) {
      if (charCount[char]) {
        charCount[char]++;
      } else {
        charCount[char] = 1;
      }
    }
  
    return charCount;
  }
  
  const exampleString = "hello world";
  const characterCounts = countCharacterOccurrences(exampleString);
  console.log("Character Counts:", characterCounts);