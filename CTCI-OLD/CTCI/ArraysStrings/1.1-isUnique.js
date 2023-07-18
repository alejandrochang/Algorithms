
// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

const unique = (str) => {
  const set = [...new Set(str)];
  return str === set.join('');
}

const unique2 = (str) => {
  let hash = {};
  for (let ch of str) {
    hash[ch] = hash[ch] + 1 || 1;
  }

  for (let key in hash) {
    if (hash[key] > 1) return false;
  }

  return true;
}

console.log(unique2('sadas')); // false
console.log(unique2('sadfhgjry')); // true
console.log(unique2('sadsadhkashdjasghfhgjry')); // false

// I: str
// O: returns a boolean
// Time: O(n)
// Space: O(n)

// 1) iterate through string, append chars to new string, if it exists, return false, otherwise return true -> O(n^2)
// 2) Put into string, spread the results, and compare to the original input, if its equal return true || false -> O(n) due to the spread ... 
// 3) * without data structure *, put all items in count hashtable, check to see if count > 1; if so return false, else true -> O(n)