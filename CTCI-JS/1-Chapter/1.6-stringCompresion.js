
// string compression if no repeated characters O(n)
// O(n) time complexity, O(n) space due to the output result is dependent on the size of the string

function stringCompression(str) {
  if (str.length === 0) {
    return null;
  }

  let compressedStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      compressedStr += str[i] + count;
      count = 0;
    }
  }

  return compressedStr;
}

console.log(stringCompression("aaaaaa")) //  "a6"
console.log(stringCompression("aabcccccaaa")) ; // "a2b1c5a3"


// keep count of number of repeated chars
// keep track of char

// function stringCompression(str) {
//   let countMap = {};
//   let result = "";

//   for (let ch of str) {
//     countMap[ch] = countMap[ch] + 1 || 1;
//   }

//   for (let ch in countMap) {
//     result += ch + String(countMap[ch]);
//   }

//   return result;
// }

// function stringCompression(str) {
//   if (str.length === 0) {
//     return null;
//   }

//   let compressedStr = "";
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     count++;
//     if (str[i] !== str[i + 1]) {
//       compressedStr += str[i] + count;
//       count = 0;
//     }
//   }

//   return compressedStr;
// }
