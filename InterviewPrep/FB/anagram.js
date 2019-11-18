// Check to see if string1 is angram of string2

const anagram = (s1, s2) => {
  let map1 = createMap(s1);
  let map2 = createMap(s2);

  for (let ch in map1) {
    if (map1[ch] !== map2[ch]) {
      return false;
    }
  }

  return Object.keys(map1).length === Object.keys(map2).length;
}

const createMap = (str) => {
  let hash = {};
  for (let ch of str.replace(/[^\w]/g, '').toLowerCase()) {
    hash[ch] = hash[ch] + 1 || 1;
  }

  return hash;
}


// const anagram = (s1, s2) => {
//   return sortStrings(s1) === sortStrings(s2);
// }


// const sortStrings = (str) => {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

console.log(anagram('cinema', 'iceman')); // true
console.log(anagram('cInema', 'iceman  ')); // true
console.log(anagram('hoooff', 'hoassf')); // false

// [pseudo]
// brute force: sort strings see if they equal eachother
// time: O(nlog(n)))