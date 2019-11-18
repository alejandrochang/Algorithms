// Palindrome

// const isPalindrome = (str) => {
//   // console.log(str.replace(/[^\w]/g, '').toLowerCase());
//   return str.replace(/[^\w]/g, '').toLowerCase() === str.replace(/[^\w]/g, '').toLowerCase().split('').reverse().join('');
// }

// [acceptable characters]
var ages = [32, 33, 16, 40];

// function checkAdult(age) {
//   return age >= 18;
// }

// [32, 33, 40];
console.log(ages.filter((age) => {
  return age >= 18;
}));

// console.log(isPalindrome("Cigar? Toss it in a can. It is so tragic")) // , true
// console.log(isPalindrome("sit ad est love")) // false