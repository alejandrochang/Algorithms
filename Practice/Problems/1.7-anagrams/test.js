const anagrams = require('./anagrams');

test("Anagram is a function", () => {
  expect(anagrams).toBeDefined();
});

test("Test rail safety and fairy tales === true ", () => {
  expect(anagrams('rail safety', 'fairy tales' )).toEqual(true);
});

test("Test RAIL! SAFETY!and fairy tales === true ", () => {
  expect(anagrams("RAIL! SAFETY!", "fairy tales")).toEqual(true);
});

test("Test Hi there and Bye there === false ", () => {
  expect(anagrams("Hi there", "Bye there")).toEqual(false);
});






// Solutions:




//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False


// function anagrams(stringA, stringB) {
//   let charMapA = buildCharMap(stringA);
//   let charMapB = buildCharMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;
//   for (let ch in charMapA) {
//     if (charMapA[ch] !== charMapB[ch]) {
//       return false;
//     }
//   }

//   return true;
// }

// function buildCharMap(str) {
//   let charMap = {};
//   for (let ch of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[ch] = charMap[ch]++ || 1;
//   }

//   return charMap;
// }