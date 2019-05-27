// Given a word W and a string S,
// find all starting indices in S which are anagrams of W.
// For example, given that W is "ab", and S is "abxaba", return 0, 3, and 4.


const startingIndices = (W, S) => {
  let indices = [];
  for (let i = 0; i < S.length; i++) {
  }
}

console.log(startingIndices("ab", "abxaba")); // 0, 3, 4

// iterate through string,
// if index of char starts with the character and ends with character 