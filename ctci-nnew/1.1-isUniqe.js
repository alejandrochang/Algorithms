// Is Unique:
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const test = 'aaa';
const test1 = 'abcdefg';

const isUnique = (str) => {
  return [...new Set(str)].length === str.length;
}

// I: string
// O: boolean

// Time: O(n), Space: O(n)
// Use a set to get unique elements and compare array with str length;


const result = isUnique(test);
const result2 = isUnique(test1);

console.log({ result, result2 });