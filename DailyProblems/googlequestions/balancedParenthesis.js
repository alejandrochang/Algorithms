// Return true or false if the parenthesis/brackets/curlies are balanced


// function isBalanced(str) {
//   const stack = [];
//   const stack2 = [];

//   for (let ch of str) {
//     if (ch === '(' || ch === '[' || ch === '{') {
//       stack.push(ch);
//     } else if (ch === ')' || ch === ']' || ch === '}') {
//       stack2.push(ch);
//     }
//   }

//   return stack.length === stack2.length;
// }

function isBalanced(str) {
  const stack = [];
  
  for (let ch of str) {
    if (!stack.length) {
      stack.push(ch);
    } else {
      if (ch === '(' && stack[stack.length - 1] === ')' || ch === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(ch);
      }
    }
  }

  return stack.length === 0;
}


console.log(isBalanced('((())')); // false
console.log(isBalanced('((()))')); // true
console.log(isBalanced('()()()()')); // true
console.log(isBalanced('(((((()))(()())))')); // false
// console.log(isBalanced('{}([]){a}[b(c)]')); // true


