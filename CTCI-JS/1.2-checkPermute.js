
// Non-naive solution in O(n) time using three loops

function checkPermutations(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  let hashMap = {};
  let hashMap2 = {};

  for (let ch of stringOne) {
    hashMap[ch] = hashMap[ch] + 1 || 1;
  }

  for (let ch of stringTwo) {
    hashMap2[ch] = hashMap2[ch] + 1 || 1;
  }

  for (let char in hashMap) {
    if (hashMap[char] !== hashMap2[char]) {
      return false;
    }
  }

  return true;
};

// Tests

console.log(checkPermutations('aba', 'aab')) //  true;
console.log(checkPermutations("racecar", "racecar")); //  true;
console.log(checkPermutations('aab', 'aaz')) //  false;
console.log(checkPermutations('aba', 'aaba')) //  false;
console.log(checkPermutations('aba', 'aa')) //  false;


// naive solution
// O(n*log(n)) due to sorting 

function checkPermutationsNaive(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  }

  let oneSorted = stringOne.split('').sort().join('');
  let twoSorted = stringTwo.split('').sort().join('');
  return oneSorted === twoSorted;
};