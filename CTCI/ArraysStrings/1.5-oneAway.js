// 1.5 OneAway
// There are three types of edits that can be performed on strings, insert a character,
// remove a character and replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away

const OneAway = (str1, str2) => {
  if (Math.abs(str1.length - str2.length) >= 2) return false;

  let countMap1 = {};
  let count = 0;

  for (let ch of str1) {
    countMap1[ch] = countMap1[ch] + 1 || 1;
  }

  for (let ch of str2) {
    if (countMap1[ch]) {
      delete countMap1[ch];
    }
  }

  return Object.keys(countMap1).length <= 1;
}

// { a: 2, b:1 }
// { a: 2, b:1, c: 1}

console.log(OneAway('pale', 'ple')); // true
console.log(OneAway('pale', 'pale')); // true
console.log(OneAway('pale', 'bale')); // true
console.log(OneAway('pale', 'bake')); // false

// I: str
// O: boolean
// time: O(n)
// space: O(n)


// pseudo:
// keep count of all the chars put them in charMap, remove ones already there
// if the leftovers is greater > 1, we know its more than one away. 