// This problem was asked by Amazon.

// Run-length encoding is a fast and simple method of encoding strings.
//  The basic idea is to represent repeated successive characters as a single count and character. 
//  For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

// Implement run-length encoding and decoding. You can assume the string to be encoded have no digits
//  and consists solely of alphabetic characters. You can assume the string to be decoded is valid.


// "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".
// O(n)

function encoding(str) {
  let result = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += count.toString() + str[i];
      count = 1;
    }
  }

  return result;
}

// console.log(encoding("AAAABBBCCDAA")); // "4A3B2C1D2A" | 4A3B2C1D2A



function decoding(str) {
  let charCount = [];
  let chars = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      result += Array(Number(str[i]) + 1).join(str[i + 1]);
    }
  }

  return result;
}

console.log(decoding("4A3B2C1D2A")); // "AAAABBBCCDAA"

// > Array(5).join("a") => "aaaa"
// AAAABBBCCDAA
