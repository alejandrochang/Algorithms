// Your function should reverse words in a string
// Assume that all words are space delimited and treat punctuation the same as letters

function reverseWords(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = words.length - 1; i >= 0; i--) {
    result.push(words[i]);
  }

  return result.join(" ");
}

console.log(reverseWords("Do or do not, there is no try.")); // try. no is there not, do or Do
console.log(reverseWords("A racecar is fast.")); // fast. is racecar A


// function reverseWords(str) {
//   let words = str.split(" ");
//   let result = [];
//   for (let i = words.length - 1; i >= 0; i--) {
//     result.push(words[i]);
//   }

//   return result.join(" ");
// }