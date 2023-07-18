

/*
  High Level: 
  1. Same number of chars across each one, return the length
    a. Time: O(n) + O(m), Space;  O(n) + O(m)
  2. Sort string return the same length
    a. O(nlog(n)) + O(mlog(m)), Space: O(1)
*/

// 2
function checkPermute(s1, s2) {
  if (s1.length !== s2.length) return false;
  const formatSort = (string) => {
    return [...string].sort().join('');
  }
  return formatSort(s1) === formatSort(s2);
}

function checkPermute2(s1, s2) {
  if (s1.length !== s2.length) return false;
  console.log('plop hitting')
  function buildMap(str) {
    let charMap = {};
    for (let ch of str) {
      charMap[ch] = charMap[ch] + 1 | 1;
    }
    return charMap;
  }

  const [m1, m2] = [buildMap(s1), buildMap(s2)];
  for (let key in m1) {
    if (!m2[key]) return false;
  }

  return true;
}



// Permutation Example: abcd and bcda // true
// Tests
console.log(checkPermute2('aba', 'aab'), true);
console.log(checkPermute2('aba', 'aaba'), false);
console.log(checkPermute2('aba', 'aa'), false);