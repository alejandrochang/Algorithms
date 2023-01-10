// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.



// I: String
// O: Boolean - Palindrome or not

// Uppercase, commas, semicollons
// Palindrome works if it spells the same thing backwards

function validPalindrome(str) {
  const filteredStr = str.toLowerCase().replace(/[\W_]+/g, "");
  return filteredStr === filteredStr.split('').reverse().join('');
}


// Regex: \w is shorthand notation for: [A-Za-z0-9_] 

const test1 = "A man, a plan, a canal: Panama";
console.log('result', validPalindrome(test1)); // true

const test2 = "race a car";
console.log("result", validPalindrome(test2)); // false

const test3 = " ";
console.log("result", validPalindrome(test3)); // false


