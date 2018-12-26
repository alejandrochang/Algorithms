// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) { 
  let charMapA = buildCharMap(stringA);
  let charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
  for (let ch in charMapA) {
    if (charMapA[ch] !== charMapB[ch]) {
      return false;
    }
  }

  return true;
}

function buildCharMap(str) {
  let charMap = {};
  for (let ch of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[ch] = charMap[ch]++ || 1;
  }

  return charMap;
}
console.log(anagrams('rail safety', 'fairy tales')) // --> True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')) // --> True
console.log(anagrams('Hi there', 'Bye there')) // --> False


// function anagrams(stringA, stringB) {
//   stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
//   stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

//   let charMapA = {};
//   let charMapB = {};

//   for (let ch of stringA) {
//     charMapA[ch] = charMapA[ch] + 1 || 1;
//   }

//   for (let ch of stringB) {
//     charMapB[ch] = charMapB[ch] + 1 || 1;
//   }

//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }

//   return true;
// }