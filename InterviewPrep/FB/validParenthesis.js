
// return the string of validParenthesis

// check the validity of the string

const isValidString = (str) => {
  let count = 0;
  for (let ch of str) {
    if (ch === '(') {
      count++;
    } else if (ch === ')') {
      count--;
    }

    if (count < 0) return false;
  }

  return count === 0;
}

const removeInvalidParentheses = (str) => {
  let levels = [str];

  while (true) {
    let valid = levels.filter(isValidString);
    if (valid.length > 0) return valid[0];

    let nextlevels = [];
    for (let str of levels) {
      for (let i = 0; i < str.length; i++) {
        nextlevels.push(str.substring(0, i) + str.substring(i + 1));
      }
    }

    levels = nextlevels;
  }

  return levels;
}



// let str1 = '(())'; // (())
// let str2 = '((())'; // (())
// let str2 = '))(a())'; // (a())

console.log(removeInvalidParentheses(')()(c)(')); // ()(c)
console.log(removeInvalidParentheses('(a()))')); // (a())
console.log(removeInvalidParentheses(')(')); // ''
console.log(removeInvalidParentheses('()))(()')); // ()()
console.log(removeInvalidParentheses('((str)())')); // ((str)())

// so we know the parenthesis are valid when its balanced
// when there is an equal count of left '(' and right ')' -> helper function
// store all the possiblities of valid parenthesis

// while true
//   filter all possible options with one less character
//   if the its valid return the valid option
//   iterate through the str of levels


// function isValidString(str) {
//   var count = 0;

//   for (let c of str) {
//     if (c === '(') {
//       count++;
//     } else if (c === ')') {
//       count--;
//     }
//     if (count < 0) return false;
//   }
//   return count === 0;
// }

// function removeInvalidParentheses(str) {
//   let levels = [str];

//   while (true) {
//     let valid = levels.filter(isValidString);
//     if (valid.length > 0) return valid[0];

//     // check validity of all possible substrings with one character removed.
//     let nextlevels = [];
//     for (let str of levels) {
//       for (let i = 0; i < str.length; i++) {
//           nextlevels.push(str.slice(0, i) + str.slice(i + 1));
//       }
//     }

//     levels = nextlevels;
//   }

//   return levels;
// }