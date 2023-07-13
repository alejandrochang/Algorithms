// Given a string, return the first recurring character in it, or null if there is no recurring character.

// For example, given the string "acbbac", return "b".
// Given the string "abcdef", return null.

function recurringChar(str) {
  const recurringMap = {};

  for (let ch of str) {
    recurringMap[ch] = recurringMap[ch] + 1 | 1;
    if (recurringMap[ch] >= 2) return ch;
  }

  return null;
}


const test = "acbbac";
const test2 = "abcdef";

console.log(recurringChar(test)); // 'b'
console.log(recurringChar(test2)); // null