// Remove specified Characters

// Problem
// Write an effiecnt function that deletes characters from an ASCII string. 
// Where any character existing in remove must be deleted from the str.


function removeSpecifiedChars(str, deleteStr) {
  let result = '';
  for (let ch of str) {
    if (!deleteStr.includes(ch)) {
      result += ch;
    }
  }

  return result;
}


console.log(removeSpecifiedChars('Battle of the Vowels: Hawaii vs. Gronzy', 'aeiou')); // 'Bttl f th Vwls: Hw vs. Grzny


// O(n^2) solution
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