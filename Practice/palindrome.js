// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false



const palindrome = (string) => {
  return string === string.split('').reverse().join('');
}

console.log(palindrome("abba")); //  === true
console.log(palindrome("abcdefg")); // === false


// I: string
// O: bool
// Time: O(n)
// Space: O(1)

// [pseudo]
// split string, reverser, join equal it to original string, see if its equal

// [pseudo 2]
//  iterate through string, see if first and last character are the same, if they're not return false, else return true;