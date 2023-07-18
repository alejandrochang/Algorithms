// Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin­ drome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
// EXAMPLE
// Input: Tact Coa
// Output: True (permutations: "taco cat", "atco eta", etc.)

// I: string
// O: boolean (permutation is correct)
// Cases: lowerString, spaces also matter

function palindromPermutation(str) {
  const charMap = {};
  let oddCount = 0;

  for (let i = 0; i < str.toLowerCase().length; i++) {
    let ch = str[i];
    if (ch !== ' ') {
      charMap[ch] = (charMap[ch] + 1) || 1;
    }
  }

  for (let key in charMap) {
    if (charMap[key] % 2 !== 0) {
      // if not divisible by 2
      if (oddCount > 1) return false;
      oddCount += 1;
    }
  }

  return true;
}


// Time: O(n), Space: O(n)

const result = palindromPermutation("taco cat");
const result2 = palindromPermutation("raecar");
const result3 = palindromPermutation("blah");
console.log({ result, result2, result3 });

// palindrome - forward and backward the same
// permutation - different variaties
// There can only be one off character - everything else has to have even chars


/*
  Approaches:
  1. charMap keep count of all chars - ignore spaces, if odd count > 1 -> false else true
*/