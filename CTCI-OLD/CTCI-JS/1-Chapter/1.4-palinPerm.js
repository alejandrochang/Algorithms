// Given a string, write a function to check
// if it is a permutation of a palindrome. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.


function palindromPermutation(string) {
  let hashTable = {};
  let charCount = 0;

  for (let i = 0; i < string.length; i++) {
    let ch = string[i].toLowerCase();

    if (ch === ' ') {
      continue;
    }

    if (hashTable[ch]) {
      delete hashTable[ch];
    } else {
      hashTable[ch] = true;
    }

    charCount++;
  }

  if (charCount % 2 == 0) { // if even
    if (Object.keys(hashTable).length === 0) {
      return true;
    } else {
      return false;
    }
  } else { // odd
    if (Object.keys(hashTable).length === 1) {
      return true;
    }
  }

  return false;
}

console.log(palindromPermutation("Tact Coa")); // "true"
// True (permutations: "taco cat", "atco cat")

console.log(palindromPermutation("aab")); // "true
console.log(palindromPermutation("carrace")); // "true
console.log(palindromPermutation("Tact boa")); // "false"
console.log(palindromPermutation("code")); // "false"


// I: string
// O: boolean
// C
// E


// if even: every character must appear twice
// if odd: there must be only one unique char

