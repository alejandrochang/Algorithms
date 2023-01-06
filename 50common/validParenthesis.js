// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function validParenthesis(str) {
  let stack = [];

  for (let i = str.length - 1; i >= 0; i--) {
    const curr = str[i];
    if (curr === '}' || curr === ')' || curr === ']') {
      stack.push(curr);
    } else {
      stack.pop();
    }
  }

  return stack.length === 0;
}

const s = "()[]{}";
console.log("result", validParenthesis(s));