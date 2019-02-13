// This problem was asked by Facebook.
// Given a string of round, curly, and square open and closing brackets, 
// return whether the brackets are balanced(well - formed).

// For example, given the string "([])[]({})", you should return true.
// Given the string "([)]" or "((()", you should return false.


function stringParallel(str) {
  let paranthesis = 0;
  let brackets = 0;
  let arrays = 0;

  for (let ch of str) {
    if (ch === '(') {
      paranthesis--;
    } else if (ch === ')') {
      paranthesis++;
    } else if (ch === '{') {
      brackets--;
    } else if (ch === '}') {
      brackets++;
    } else if (ch === '[') {
      arrays--;
    } else if (ch === ']') {
      arrays++;
    }
  }
  console.log('array', arrays)
  console.log('bra', brackets)
  console.log('pa', paranthesis)
  return paranthesis === 0 && brackets === 0 && arrays === 0;
}


console.log(stringParallel("([])[]({})")); // true
console.log(stringParallel("([)]")); //false 
console.log(stringParallel("((()")); //false



// ()  {}   []
// 1,2 3,4 5,6

