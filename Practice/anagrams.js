// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy taales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (str1, str2) => {
  const countMap = buildMap(str1);
  const countMap2 = buildMap(str2);

  for (let key in countMap) {
    if (countMap2[key] !== countMap[key]) {
      // if count on maps is different it will return false
      return false;
    }
  }
  
  // cant compare hashMaps, but can compare there lengths, there contents are correct at this point
  return Object.keys(countMap).length === Object.keys(countMap2).length;
}

const buildMap = (str) => {
  const map = {};
  for (let ch of str.replace(/[^\w]/g, '').toLowerCase()) {
    map[ch] = map[ch] + 1 || 1;
  }

  return map;
}

// I: str1, str2
// O: Bool
// Time: O(n)
// Space: O(n)


// const anagrams = (str1, str2) => {
//   return filteredString(str1) === filteredString(str2);
// }

// const filteredString = (string) => {
//   return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
// }

console.log(anagrams('rail safety', 'fairy tales')); //  --> True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); //  --> True
console.log(anagrams('Hi there', 'Bye there')); // --> False

// I: string1, string2
// O: Boolean
// Time:
// Space:


// [pseudo]

// easy solution: take all characters, filter all characters that are  not letters, sort them see if they qual eachother. Time Complexity: O(log(n))
// Hard solutionm: countMap, make sure every ch in map1 === ch of map2, check length

// replace(/[^\w]/g, "")