// Check Permutation: Given two strings,
// write a method to decide if one is a permutation of the
// other.

const sortString = (str) => str.split('').sort().join('');

function checkPermutationsSort(s1, s2) {
  s1 = sortString(s1)
  s2 = sortString(s2)

  return s1.length > s2.length ? s1.includes(s2) : s2.includes(s1);
}

// I: s1, and s2
// O: boolean of whether they're permutations
const s1 = "ab";
const s2 = "mnbac";
const res = checkPermutationsSort(s1, s2);
// result true;
const s3 = "xt";
const s4 = "axv";
const res2 = checkPermutationsSort(s3, s4);
/// result: false

console.log({ res, res2 });


function createCountMap(str) {
  let map = {};

  for (let i = 0; i < str.length; i++) {
    map[str[i]] = (map[str[i]] || 0) + 1;
  }

  return map;
}

function checkPermutations(str1, str2) {
  let s1Map = createCountMap(str1);
  let s2Map = createCountMap(str2);

  const [shortMap, longMap] = str1.length > str2.length ? [s1Map, s2Map] : [s2Map, s1Map];

  console.log({ s1Map, s2Map });

  for (let key in longMap) {
    if (!shortMap[key]) return false;
  }

  return true;
}


const res3 = checkPermutations(s1, s2);
// result true;
const res4 = checkPermutations(s3, s4);
// result false;

console.log({ res3, res4 });

/*
  Approaches:
  1. Sort the strings, check if str1 is in str2 -> Time: O(n * log(n) + m * log(m)) - Space: O(1)
  2. countMap of both strings - check those maps key-value pairs match up true else false -> Time: O(n + m), Space: O(n + m)
*/