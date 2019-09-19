// 1.5 OneAway
// There are three types of edits that can be performed on strings, insert a character,
// remove a character and replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away

const OneAway = (str1, str2) => {
  // let charMap = {};
  // let count = 0;

  // for (let ch of str1) {
  //   charMap[ch] + 1 || 1;
  // }

  // for (let ch of str2) {
  //   if (charMap[ch]) {
  //     delete charMap[ch];
  //   } else {
  //     count++;
  //   }
  // }

  // return count < 2;
}


console.log(OneAway('pale', 'ple')); // true
console.log(OneAway('pale', 'pale')); // true
console.log(OneAway('pale', 'bale')); // true
console.log(OneAway('pale', 'bake')); // false

// I: str
// O: boolean
// time:
// space:


// pseudo:
// keep count of all the chars put them in charMap, remove ones already there
// if the leftovers is greater > 1, we know its more than one away. 