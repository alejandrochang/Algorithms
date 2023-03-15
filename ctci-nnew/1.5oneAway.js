// One Away: There are three types of edits that can be performed on strings: 
// insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true pales, pale -> true pale, bale -> true pale, bake -> false

const buildMap = (str) => {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    map[ch] = (map[ch] + 1) || 1;
  }

  return map;
}

function oneAway(s1, s2) {
  const [short, long] = s1.length > s2.length ? [s2,s1] : [s1,s2];
  const shortMap = buildMap(short);
  const longMap = buildMap(long);
  let diffCharCount = 0;

  for (let key in longMap) {
    if (!shortMap[key]) {
      diffCharCount++;
    }

    if (diffCharCount >= 2) {
      return false;
    }
  }

  return true;
}


const result = oneAway('pale', 'ple'); // true - { p: 1, a: 1, l: 1, e: 1 } - { p: 1, l: 1, e: 1 } - diff = 1 -> true
const result2 = oneAway('pales', 'pale'); // true
const result3 = oneAway('pale', 'bale'); // true
const result4 = oneAway('pale', 'bake'); // false

console.log({ result, result2, result3, result4 });

// insert/remove/replace
// insert char + 1
// remove char - 1
// replace char - 0


/*
  Approaches:
  1. CharMap keep count of chars - any count > 2 return false - else true
  Time: O(n + m), Space: O(n + m)

  2. Sort string -> traverse string - (i,j) - if diff >= 2 return false - keep count of different numbers increase i and j
  Time: O(nlogn), Space: O(1)
*/