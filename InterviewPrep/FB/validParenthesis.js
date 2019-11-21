
// return the string of validParenthesis

// check the validity of the string
function isValidString(str) {
  var count = 0;
  console.log({ str });
  for (let c of str) {
    if (c === '(') {
      count++;
    } else if (c === ')') {
      count--;
    }
    if (count < 0) return false;
  }
  return count === 0;
}

function removeInvalidParentheses(str) {
  let levels = [str];

  while (true) {
    let valid = levels.filter(isValidString);
    console.log(valid)
  //   console.log({ valid });
    if (valid.length > 0) {
        return new Set(valid);
    }

  //   // check validity of all possible substrings with one character removed.
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

console.log(removeInvalidParentheses(')()(c)(')); //()(c)
// console.log(removeInvalidParentheses('(a()))'));
// console.log(removeInvalidParentheses(')('));
// console.log(removeInvalidParentheses('()))(()'));
// console.log(removeInvalidParentheses('((str)())'));