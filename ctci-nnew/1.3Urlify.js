// URLify: Write a method to replace all spaces in a string with '%20'.
// You may assume that the string has sufficient space at the end to hold the additional characters,and that you are given the "true" 
// length of the string. (Note: If implementing in Java,please use a character array so that you can perform this operation in place.)
// EXAMPLE
// Input: "Mr John Smith ", 13 Output: "Mr%20John%20Smith"

// I: string
// O: string (urlified)

/*

  Overall Approaches:
  1. Use split().join() operations - trim(edges), split on space, join on every char - Time: O(n), Space: O(1)
  2. Regex split on space and join %20 (likely most efficient)
*/

function URLify(str) {
  return str.trim().split(' ').join('%20');
}

let result = URLify("Mr John Smith ");
console.log({ result });