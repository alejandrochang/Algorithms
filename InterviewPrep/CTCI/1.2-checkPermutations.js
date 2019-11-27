// Check Permutations: Given two strings, write a method to decide if one is a permutation of the other. 
// ex. 'abc', 'cba' // true

const checkPermutations = (s1, s2) => {
  return sortPermutation(s1) === sortPermutation(s2);
}

const sortPermutation = (str) => {
  return str.split('').sort().join('');
}

// console.log(checkPermutations('aba', 'aab')) //  true;
// console.log(checkPermutations("racecar", "racecar")); //  true;
// console.log(checkPermutations('aab', 'aaz')) //  false;
// console.log(checkPermutations('aba', 'aaba')) //  false;
// console.log(checkPermutations('aba', 'aa')) //  false;

// [pseudo]
// sort them, see if they are equal to each other
// Time: O(nlog(n))
/// Space: O(1)


const checkPermutations2 = (s1, s2) => {
  let map1 = createMap(s1);
  let map2 = createMap(s2);

  for (let ch in map1) {
    if (!map2[ch]) return false;
  }

  return s1.length === s2.length;
}

const createMap = (str) => {
  let map = {};
  for (let ch of str) {
    map[ch] = map[ch] + 1 || 1;
  }

  return map;
}
console.log(checkPermutations2('aba', 'aab')) //  true;
console.log(checkPermutations2("racecar", "racecar")); //  true;
console.log(checkPermutations2('aab', 'aaz')) //  false;
console.log(checkPermutations2('aba', 'aaba')) //  false;
console.log(checkPermutations2('aba', 'aa')) //  false;

// [pseudo 2]
// store them in two diff maps, look at keys and length to make sure its correct

// Time: O(n)
// Space: O(n)

