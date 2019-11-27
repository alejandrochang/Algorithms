// 1.5 OneAway
// There are three types of edits that can be performed on strings, insert a character,
// remove a character and replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away

const oneAway = (s1, s2) => {
  let map1 = buildMap(s1);
  let map2 = buildMap(s2);
  let count = 0;

  for (let ch in map1) {
    if (!map2[ch]) count++;
  }
  
  return count <= 1;
}

const buildMap =(str) => {
  let map = {};
  for (let ch of str) {
    map[ch] = map[ch] + 1 || 1;
  }

  return map;
}

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pale', 'pale')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('pale', 'bake')); // false


// [pseudo]

// Time: O(n)
// Space: O(n)