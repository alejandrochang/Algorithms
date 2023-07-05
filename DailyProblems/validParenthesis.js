

Array.prototype.peek = function() {
  return this[0];
}

function isValid(s) {
  const myStack = [];
  const validSymbols = ["(", ")", "[", "]", "{", "}"]

  const opening = {
      "(": ")",
      "[": "]",
      "{": "}"
  }
  
  const closing = {
      ")": true, 
      "]": true, 
      "}": true 
  }


  // stack: []

  // go through length of string
  for (let i = 0; i < s.length; i++) {
    // if not valid simple return false
    if (!validSymbols.includes(s[i])) return false

    if (opening[s[i]]) myStack.push(s[i])

    if (closing[s[i]]) {
        const peek = myStack.peek();
        // console.log({ peek })

        if (opening[peek] === s[i]) {
          myStack.pop()
        } else {
          return false
        }
    }

    console.log(myStack);
  }

  // stack should be empty
  return myStack.length === 0;
}

// function isValid(s) {
//   const stack = [];

//   const open = {
//     '(': ')',
//     '[': ']',
//     '{': '}',
//   }

//   const closed = {
//     ')': true,
//     ']': true,
//     '}': true,
//   }

//   for (let i = 0; i < s.length; i++) {

//     if (s[i] === open[s[i]]) {
//       stack.push(s[i]);
//     }


//     if (s[i] === closed[s[i]]) {
//       // peek
//       // if (peek ==)
//     }
//   }

//   return stack.length === 0;
// }

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false