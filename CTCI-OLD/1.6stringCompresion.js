// String Compression: Implement a method to perform basic string compression using the counts 
// of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. 
// If the "compressed" string would not become smaller than the original string, your method should return
// the original string. You can assume the string has only uppercase and lowercase letters (a - z).

// {a: 2, b: 1, c: 5, a:3}

// I: string
// O: string (compressed with counts)



/* 
  Approaches:
  1. Iterate through strinng, keep count, once nextItem !== currentItem -> endCount + add char + itemCount
    - reset itemCount, continue
*/

function stringCompression(str) {
  let resultString = '';
  let charCount = 1;

  for (let i = 0; i < str.length; i++) { // aab
    const ch = str[i];
    if (ch === str[i + 1]) {
      charCount += 1;
    } else {
      resultString += `${ch}${charCount}`;
      charCount = 1;
    }
  }

  return resultString;
}

// Time: O(n), Space: O(n)


let result = stringCompression('aabcccccaaa'); // a2blc5a3
console.log({ result }); // { result: 'a2b1c5a3' }