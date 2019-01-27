

/// permutations of a String

// Problem: Implement a routine that prints all possible orderings of the characters in a string. In other 
// words, print all permutations that use all the characters form the original string. For example 
// given the string "hat" should print th strings "tha", "aht", "tah", "ath", "hta", "hat".

function permutations(str) {
  if (str.length <= 1) {
    return str;
  }

}

console.log(permutations("hat")); // "tha", "aht", "tah", "ath", "hta", "hat"