// Write a function that returns whether or not two strings
// are fuzzy palindromes of one another (i.e. ignore spaces and capitalization).  

// Given a string S, Check if characters of the given string can be rearranged to form a palindrome. 
// For example characters of 'geeksogeeks' can be rearranged to form a palindrome 
// “geeksoskeeg”, but characters of “geeksforgeeks” cannot be rearranged to form a palindrome.

const fuzzyPalindromes = (str) => {
  const countMap = {};

  for (let ch of str) {
    if (countMap[ch]) {
      // if exists delete
      delete countMap[ch]
    } else {
      countMap[ch] = 1;
    }
  }

  for (let ch in countMap) {
    if (Object.keys(countMap).length > 1) {
      return false;
    }
  }

  return true;
}

console.log(fuzzyPalindromes('geeksogeeks')); // true, geeksoskeeg
console.log(fuzzyPalindromes('ABCDBCA')); // true, geeksoskeeg
console.log(fuzzyPalindromes('geeksforgeeks')); // false


// I: string
// O: boolean
// Time: O(n)
// Space: O(n)

// [pseudo]

// create a count map that adds and deletes the characters of the string,
// if there is more than one remaining its false, otherwise its true