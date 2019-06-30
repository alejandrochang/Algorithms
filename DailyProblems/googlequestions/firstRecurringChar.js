// This problem was asked by Google.

// Given a string, return the first recurring character in it, or null if there is no recurring character.

// For example, given the string "acbbac", return "b". Given the string "abcdef", return null.

function firstRecurringChar(str) {
  let hashMap = {};
  for (let ch of str) {
    hashMap[ch] = hashMap[ch] + 1 || 1
    if (hashMap[ch] === 2) return ch;
  }

  return null;
}

console.log(firstRecurringChar("acbbac")); // return "b". Given the string "abcdef", return null.
console.log(firstRecurringChar("abcdef")); // null