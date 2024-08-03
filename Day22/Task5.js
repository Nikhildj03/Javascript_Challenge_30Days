/ * Activity 5: Group Anagrams */;
// * Task5: Solve the "Group Anagrams" problem on LeetCode.
// -> Write a function that takes an array of strings and groups anagrams together.
// -> Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
  const result = [];
  const groupedAnagrams = [];

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    let found = false;

    for (let i = 0; i < groupedAnagrams.length; i++) {
      if (groupedAnagrams[i][0] === sortedStr) {
        result[i].push(str);
        found = true;
        break;
      }
    }

    if (!found) {
      groupedAnagrams.push([sortedStr]);
      result.push([str]);
    }
  }

  return result;
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
