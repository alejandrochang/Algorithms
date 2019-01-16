

function palindromPermutation(string) {
  let charMap = {};

  for (let ch of string) {
    charMap[ch] = charMap[ch] + 1 || 1;
  }

  if (string.length % 2 === 0) { // if even
    
  } else {

  }
}

console.log(palindromPermutation("Tact Coa")); // "true"
console.log(palindromPermutation("aab")); // "true
console.log(palindromPermutation("carrace")); // "true
console.log(palindromPermutation("Tact boa")); // "false"
console.log(palindromPermutation("code")); // "false"
