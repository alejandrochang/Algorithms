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

const unique3 = (str) => {
  str = str.split('').sort().join('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) return false;
  }

  return true;
}


console.log(unique3('sadas')); // false
console.log(unique3('sadfhgjry')); // true
console.log(unique3('sadsadhkashdjasghfhgjry')); // false

// console.log(unique1('sadas')); // false
// console.log(unique1('sadfhgjry')); // true
// console.log(unique1('sadsadhkashdjasghfhgjry')); // false

// console.log(unique2('sadas')); // false
// console.log(unique2('sadfhgjry')); // true
// console.log(unique2('sadsadhkashdjasghfhgjry')); // false


// constant space, time: O(1)
// 3 pointer approach

const uniqueFast = (arr) => {};
