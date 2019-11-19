// Given a phrase, reverse the order of the characters of each word.

// const reverseWords = (str) => {
//   let reverseStr = str.split('').reverse().join('');
//   return reverseStr.split(' ').reverse().join(' ');
// }

const reverseWords = (str) => {
  let result = '';
  let words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = i === 0 ? words[i].split('').reverse().join('') : ' ' + words[i].split('').reverse().join('');
    result += word;
  }

  return result;
}
  
console.log(reverseWords("I love JavaScript!")); // "I evol !tpircSavaJ");
// I evol !tpircSavaJ


// [pseudo]
// split string into arr, reverse, join -> backwards
// split into space, reverse join into space