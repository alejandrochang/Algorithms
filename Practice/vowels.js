// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


const vowels = (string) => {
  const matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

console.log(vowels('Hi There!')); // --> 3
console.log(vowels('Why do you ask?')); // --> 4
console.log(vowels('Why?')); // --> 0


// I: string
// O: number
// Time: O(n)
// Space: O(1)

// [pseudo code]s
// turn string -> arr -> reverse -> join to string