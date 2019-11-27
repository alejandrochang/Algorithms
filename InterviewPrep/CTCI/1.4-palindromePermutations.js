// palindrome ex. racecar -> racecar
// permutation ex. ab -> ab, ba


const palindromePermutation = (str) => {
  let map = {};
  for (let ch of str.toLowerCase()) {
    if (ch === ' ') continue;
    if (!map[ch]) {
      map[ch] = true
    } else {
      delete map[ch];
    }
  }

  return Object.keys(map).length <= 1;
}

console.log(palindromePermutation("Tact Coa")); // "true"
// True (permutations: "taco cat", "atco cat")

console.log(palindromePermutation("aab")); // "true
console.log(palindromePermutation("carrace")); // "true
console.log(palindromePermutation("Tact boa")); // "false"
console.log(palindromePermutation("code")); // "false"

// Time: O(n)
// Space: O(n)


// [pseudo]
// We can count palindrom permutations by keeping count of keys,
// keys cannot be greater than 1
// add to a map, remove from a map
// if map.length is > 1, it is not a palindrome permutation