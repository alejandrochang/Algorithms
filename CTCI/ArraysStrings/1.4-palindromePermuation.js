// Palindrome Permutation

// Given a string write a function to check if its a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words. 

// palindrome ex. racecar -> racecar
// permutation ex. ab -> ab, ba

const palindromPermutation = (str) => {
  let charMap = {};
  let count = 0;

  for (let ch of str.toLowerCase()) {
    if (ch === ' ') {
      continue;
    }

    if (charMap[ch]) {
      delete charMap[ch];
    } else {
      charMap[ch] = 1;
    }

    count++;
  }

  if (count % 2 === 0) {
    if (Object.keys(charMap).length === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    if (Object.keys(charMap).length === 1) {
      return true;
    }
  }

  return false;
}

// I: string
// O: boolean
// time: O(n)
// space: O(n)

// pseudo:
// 
console.log(palindromPermutation("Tact Coa")); // "true"
// True (permutations: "taco cat", "atco cat")

console.log(palindromPermutation("aab")); // "true
console.log(palindromPermutation("carrace")); // "true
console.log(palindromPermutation("Tact boa")); // "false"
console.log(palindromPermutation("code")); // "false"

// how do we know its a permutation? -> if it has the same chars forward and backwards
// iterate through string create a map and delete all repeated chars, keep count of all characters, if it ends up, leftover chars
// even: every character must appear twice, 
// odd: there must be only one unique char
