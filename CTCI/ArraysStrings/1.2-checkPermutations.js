// Check Permutations: Given two strings, write a method to decide if one is a permutation of the other. 
// ex. 'abc', 'cba' // true

const checkPermutations = (str1, str2) => {
  let hash = {};
  let hash2 = {};

  for (let ch of str1) {
    hash[ch] = hash[ch] + 1 || 1;
  }

  for (let ch of str2) {
    hash2[ch] = hash2[ch] + 1 || 1;
  }

  for (let ch in hash) {
    if (hash[ch] !== hash2[ch]) {
      return false;
    }
  }

  return true;
}

console.log(checkPermutations('aba', 'aab')) //  true;
console.log(checkPermutations("racecar", "racecar")); //  true;
console.log(checkPermutations('aab', 'aaz')) //  false;
console.log(checkPermutations('aba', 'aaba')) //  false;
console.log(checkPermutations('aba', 'aa')) //  false;


// I: str1, str2
// O: boolean

// pseudo: compare the counts of each of the keys and see if it matters