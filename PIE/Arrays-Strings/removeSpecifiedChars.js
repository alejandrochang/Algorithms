// Remove specified Characters

// Problem
// Write an effiecnt function that deletes characters from an ASCII string. 
// Where any character existing in remove must be deleted from the str.

// Time Complexity O(n + m)
// space: O(n) - due to the length of the str and how many characters are erased and added to result

function removeSpecifiedChars(str, deleteStr) {
  let charMap = {};
  let result = '';

  for (let ch of deleteStr) {
    charMap[ch] = ch;
  }

  // console.log(charMap);
  for (let ch of str) {
    if (charMap[ch] !== ch) {
      result += ch;
    }
  }

  return result;
}


console.log(removeSpecifiedChars('Battle of the Vowels: Hawaii vs. Gronzy', 'aeiou')); // 'Bttl f th Vwls: Hw vs. Grzny
// Bttl f th Vwls: Hw vs. Grnzy


// O(n * m) solution
// function removeSpecifiedChars(str, deleteStr) {
//   let result = "";
//   for (let ch of str) {
//     if (!deleteStr.includes(ch)) {
//       result += ch;
//     }
//   }

//   return result;
// }
// Bttl f th Vwls: Hw vs. Grnzy

// console.log(removeSpecifiedChars(str));