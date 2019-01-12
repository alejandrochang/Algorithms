// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let count = 0;
  let mostCommon = "";

  for (let ch of str) {
    charMap[ch] = charMap[ch] + 1 || 1;
  }

  for (let ch in charMap) {
    if (charMap[ch] > count) {
      count = charMap[ch];
      mostCommon = ch;
    }
  }

  return mostCommon;
}


console.log(maxChar("abcccccccd")); // === "c"
console.log(maxChar("apple 1231111")); // === "1"




/*
Both are equal:

for (let char of str) {
  if (!hashMap[char]) {
    hashMap[char] = 1;
  } else {
    hashMap[char] += 1;
  }
}

for (let char of str) {
  hashMap[char] = hashMap[char] + 1 || 1;
}

*/