// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation. Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrams = (str1, str2) => {
  return filteredString(str1) === filteredString(str2);
}

const filteredString = (string) => {
  return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

console.log(anagrams('rail safety', 'fairy tales')); //  --> True
console.log(anagrams('RAIL! SAFETY!', 'fairy tales')); //  --> True
console.log(anagrams('Hi there', 'Bye there')); // --> False

// I: string1, string2
// O: Boolean
// Time:
// Space:


// [pseudo]

// easy solution: take all characters, filter all characters that are  not letters, sort them see if they qual eachother. 
// countMap,keep count of a count of the characters used, 


// replace(/[^\w]/g, "")