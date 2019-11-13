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


// I: 
// O: 
// Time: 
// Space: 

// [pseudo]
// split string, reverser, join equal it to original string, see if its equal