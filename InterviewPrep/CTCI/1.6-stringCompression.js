// String Compression

// Implement a method to perform basic string compression using the counts of repeated characters
// For example: the string aabccccccaaa would become a2b1c5a3. If the 'compressed' string would 
// not become smaller than the original string, your method should return the original string.
// You can assume the string has only uppercase and lowercase letters. 


const stringCompression = (str) => {
  let count = 1;
  let compressedStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressedStr.push(`${str[i]}${count}`)
      count = 1;
    }
  }

  return str.length >= compressedStr.join('').length ? str : compressedStr.join('');
}

console.log(stringCompression('aabcccccaaa')); //  a2b1c5a3
console.log(stringCompression('bb')); // b2 -> 'bb' 

// [pseudo]
// start count at 1
// start with a str[i]
// if str[i] === str[i + 1]
//    increment the count, keep iterating
// else if its not equal
//    reset count to 1
//    continue iterating
// if str.length >= compressedStr.length return str : return compressedStr

