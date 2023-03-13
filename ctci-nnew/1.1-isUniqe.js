// Is Unique:
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

// Assumption is string is unique
// Return boolean whether its unique or not

const test = 'aaa';
const test1 = 'abcdefg';

const isUnique = (str) => {
  return [...new Set(str)].length === str.length;
}

// I: string
// O: boolean

// Time: O(n), Space: O(n)
// Use a set to get unique elements and compare array with str length;s


const result = isUnique(test);
const result2 = isUnique(test1);

console.log({ result, result2 });


// Using bits solutions
// Time: O(n) - Space: O(1)
// Edge case has to be ordered

function isUniqueEfficient(str) {
  for (let i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) === str.charAt(i + 1)) return false;
  }

  return true;
}

const result3 = isUniqueEfficient(test);
const result4 = isUniqueEfficient(test1);

console.log({ result3, result4 });
