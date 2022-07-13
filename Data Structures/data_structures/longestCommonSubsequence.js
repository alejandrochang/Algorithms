// Write a program that computes the length of the longest common subsequence of three given strings. For example,
// given "epidemiologist", "refrigeration", and "supercalifragilisticexpialodocious",
// it should return 5, since the longest common subsequence is "eieio".

const longestCommonSubsequence = (arr) => {
  return arr.map((str) => {
    return str.split('').sort().join('');
  })
};


// 


const arr = ["epidemiologist", "refrigeration", "supercalifragilisticexpialodocious"];
console.log("res", longestCommonSubsequence(arr)); // eieio