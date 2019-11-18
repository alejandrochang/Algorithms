// Given a string of words or phrases, count the number of vowels.

const vowels = (str) => {
  // regex expression includes more than one
  let matches = str.match(/[aeiou]/g);
  return matches ? matches.length : 0;
}

// const vowels = (str) => {
//   let count = 0;
//   let values = ['a', 'e','i', 'o', 'u'];
//   for (let ch of str) {
//     if (values.includes(ch)) {
//       count += 1;
//     }
//   }

//   return count;
// }


console.log(vowels("hello world")) // 3