
let str1 = "dbcaba" // b

function firstRepeatingCharacter(str) {
  let charMap = {};

  for (let ch of str) {
    charMap[ch] = charMap[ch] + 1 || 1;
  }

  for (let key in charMap) {
    if (charMap[key] >= 2) {
      return key;
    }
  }

  return null;
}

console.log(firstRepeatingCharacter(str1)) // b