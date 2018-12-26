// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let hashMap = {};
  let count = 0;
  let mostCommonChar;

  for (let char of str) {
    hashMap[char] = hashMap[char] + 1 || 1;
  }

  for (let ch in hashMap) {
    if (hashMap[ch] > count) {
      count = hashMap[ch];
      mostCommonChar = ch;
    }
  }

  return mostCommonChar;
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