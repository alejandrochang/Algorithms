/*  
  High Level Approaches: 
  1. CharMap approach char count >= 2 - return false, return true
    a. Time: O(n) Space: O(n)
  2. Sort the char count () - check if nexst is equal to current (return false)
    a. Time: O(nlog(n)), Space: O(1)
*/

// 1.
function isUnique(str) {
  let charMap = {};
  for (let ch of str) {
    charMap[ch] = charMap[ch] + 1 || 1;
    if (charMap[ch] >= 2) return false;
  }

  return true;
}

function isUnique2(str) {
  str = [...str].sort((a,b) => a - b).join('');
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) return false;
  }

  return true;
}

/* TESTS */
console.log(isUnique('abcd'), 'true');
console.log(isUnique('abccd'), 'false');
console.log(isUnique('bhjjb'), 'false');
console.log(isUnique('mdjq'), 'true');