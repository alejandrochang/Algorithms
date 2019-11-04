// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// const reverseString = (str) => {
//   return str.split('').reverse().join('');
// }

const reverseString = (str) => {
  let result = '';

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}


console.log(reverseString('apple')); // === 'elppa'
console.log(reverseString('hello')); // === 'olleh'
console.log(reverseString('Greetings!')); // === //'!sgniteerG'

// I: string
// O: string
// Time: O(n)
// Space: O(1)

// [pseudo code]s
// turn string -> arr -> reverse -> join to string