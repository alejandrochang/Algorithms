// Write a balancedParenthesis function
// that takes a string as input and returns a boolean —
// if the parentheses in the input string are ‘balanced’,
// then return true, else return false. For example, the
// program should print true for exp = “[()]{}{[()()]()}”
// and false for exp = “[(])”

const isMatchingBrackets = (str) => {

}

// Time: O(n)
// Space: O(n)

// const isMatchingBrackets = (str) => {
//   let stack = [];

//   let open = {
//     '(': ')',
//     '{': '}',
//     '[': ']',
//   };

//   let closed = {
//     ')': true,
//     '}': true,
//     ']': true,
//   };

//   for (let i = 0; i < str.length; i++) {
//     let ch = str[i];
//     if (open[ch]) {
//       stack.push(ch);
//     } else if (closed[ch]) {
//       if (open[stack.pop()] !== ch) {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

// T: O(n)
// T: O(n)

console.log(isMatchingBrackets("(){}")); // returns true
console.log(isMatchingBrackets("))((")); // returns false
console.log(isMatchingBrackets("[()]{}{[()()]()}")); // returns false
console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
console.log(isMatchingBrackets("({(()))}}"));  // returns false


// I: str
// O: boolean
// Time: 
// Space: 

// string 
// have a stack,
// push unto the stack if it equal left
// pop the stack if it equals right,
// if there is a right, there has to be a left

// reduce the string to array,
// have a count for the number of times it includes a left,
// or right, if it === 0 return true, else return false
// as we know its unbalanced