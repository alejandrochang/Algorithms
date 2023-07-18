// String Compression

// Implement a method to perform basic string compression using the counts of repeated characters
// For example: the string aabccccccaaa would become a2b1c5a3. If the 'compressed' string would 
// not become smaller than the original string, your method should return the original string.
// You can assume the string has only uppercase and lowercase letters. 

const stringCompression = (str) => {
  let compressedString = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      count++;
    } else {
      compressedString += (str[i] + count.toString());
      count = 1;
    }
  }

  return compressedString.length < str.length ? compressedString : str;
}


console.log(stringCompression('aabcccccaaa')); //  a2b1c5a3

// I: String
// O: String (either compressed or original)
// Time: O(n)
// Space: O(n)

// Where n is the length of the string

// pseudo code:
// Keep count of the compressedString and compare it to its next idx position