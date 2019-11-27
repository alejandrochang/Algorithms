// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?


// Strategy 1: create a set of string, join it equal it to input
const unique = (str) => {
  return str === [...new Set(str)].join('');
}

// Time: O(n)
// Space: O(1)


const unique2 = (str) => {
  let map = {};

  for (let ch of str) {
    if (!map[ch]) {
      map[ch] = ch;
    } else {
      return false;
    }
  }

  return true;
}


console.log(unique2('sadas')); // false
console.log(unique2('sadfhgjry')); // true
console.log(unique2('sadsadhkashdjasghfhgjry')); // false

// console.log(unique2('sadas')); // false
// console.log(unique2('sadfhgjry')); // true
// console.log(unique2('sadsadhkashdjasghfhgjry')); // false
