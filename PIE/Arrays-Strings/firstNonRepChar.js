

// Problem:
// Find the firs non-repeated char. Write an efficient function to find the firs nonrepeated char in a string. 

function firstNonRepChar(str) {
  let charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let ch in charMap) {
    if (charMap[ch] === 1) {
      return ch;
    }
  }

  return null;
}

console.log(firstNonRepChar('total')); // o
console.log(firstNonRepChar('teeter')); // r
