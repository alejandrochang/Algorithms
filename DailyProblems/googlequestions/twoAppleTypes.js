// A girl is walking along an apple orchard with a bag in each hand. She likes 
// to pick apples from each tree as she goes along, but is meticulous about
// not putting different kinds of apples in the same bag.
// Given an input describing the types of apples she will pass on her path,
// in order, determine the length of the longest portion of her path that consists of just two types of apple trees.

// For example, given the input [2, 1, 2, 3, 3, 1, 3, 5], the longest portion will involve types 1 and 3, with a length of four.

const longestPortion = (array) => {
  let options = {};
  let currentCount = 0;
  let longestPath = 0;

  
}

console.log(longestPortion([2, 1, 2, 3, 3, 1, 3, 5])); // length of 4

// I: arr
// O: int
// T: O(n)
// S: O(n)

// [pesudo]
// add options to map
// if (length of map is < 3) continue adding
// if length of map is > 3 reset currentCount and assign longestPath if possible