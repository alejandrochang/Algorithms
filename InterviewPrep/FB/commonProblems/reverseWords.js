// Given a phrase, reverse the order of the characters of each word.

const reverseWords = (str) => {
  let reverseStr = str.split('').reverse().join('');
  return reverseStr.split(' ').reverse().join(' ');
}  
  
console.log(reverseWords("I love JavaScript!")); // "I evol !tpircSavaJ");
// I evol !tpircSavaJ


// [pseudo]
// split string into arr, iterate through word