/*
Activity-5[Word Ladder]
Task-5:Solve the "Word Ladder" problem on Leetcode.
Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at the time and each transformed word must exist in the word list.
Log the length of the shortest transformation sequence for a few test case.
*/

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  let queue = [[beginWord, 1]];

  while (queue.length > 0) {
    const [currentWord, length] = queue.shift();

    if (currentWord === endWord) return length;

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c < 123; c++) {
        // 'a' to 'z'
        const newWord =
          currentWord.slice(0, i) +
          String.fromCharCode(c) +
          currentWord.slice(i + 1);
        if (wordSet.has(newWord)) {
          queue.push([newWord, length + 1]);
          wordSet.delete(newWord);
        }
      }
    }
  }

  return 0;
}

// Test cases
let testCases = [
  {
    beginWord: "hit",
    endWord: "cog",
    wordList: ["hot", "dot", "dog", "lot", "log", "cog"],
  }, // Expected output: 5
  {
    beginWord: "hit",
    endWord: "cog",
    wordList: ["hot", "dot", "dog", "lot", "log"],
  }, // Expected output: 0
  { beginWord: "a", endWord: "c", wordList: ["a", "b", "c"] }, // Expected output: 2
  {
    beginWord: "game",
    endWord: "thee",
    wordList: [
      "game",
      "came",
      "cane",
      "lane",
      "late",
      "date",
      "dare",
      "dare",
      "bare",
      "bore",
      "boar",
      "boar",
      "hoar",
      "hear",
      "heir",
      "herd",
      "here",
      "here",
      "tree",
      "free",
      "thee",
    ],
  }, // Expected output: 12
];

testCases.forEach((test, index) => {
  const { beginWord, endWord, wordList } = test;
  console.log(
    `Test Case ${
      index + 1
    }: Length of shortest transformation sequence is ${ladderLength(
      beginWord,
      endWord,
      wordList
    )}`
  );
});
