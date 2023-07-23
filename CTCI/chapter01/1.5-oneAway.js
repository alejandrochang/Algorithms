

function handleSameLength(s1, s2) {
  let count = 0;
  // length is the same
  for (let i = 0; i < s1.length; i++) {
    const ch1 = s1[i];
    const ch2 = s2[i];
    if (ch1 !== ch2) count += 1;
  }

  return count <= 1;
}

function oneAway(s1, s2) {
  // (has to be 1 or less as 1 away max
  if (Math.abs(s1.length - s2.length >= 2)) return false;
  // if the same length
  if (s1.length === s2.length) {
    return handleSameLength(s1, s2);
  } else {
    // if length is different (longer will be str1)
    let [str1, str2] = s1.length > s2.length ? [s1, s2] : [s2, s1];

    for (let i = 0; i < str1.length; i++) {
      let ch1 = str1[i];
      let ch2 = str2[i];
      if (ch1 !== ch2) {
        // check edge case of last element
        const tempArr = str2.split('');
        if (!ch2) {
          tempArr.push(ch1);
        } else {
          tempArr.splice(1, 0, ch1);
        }

        if (tempArr.join('') === str1) return true;
      }
    }
    return false;
  }
}


// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);

// pale | bale -> p b (1)
// pale | ple  -> p, a l


// check length of strings
// a. if one is smaller -> check other chars in it at every position see if its true
// b. if the same -> see if one char is different and substitute at every position
// c. if 2 >= chars are differente - false

/*

  countMap = {};
  1. Check if 2>= chars are diff if so return false
  2. If only one diff ->
    a. check smaller size, and try insert method
    b. if same length try substitute method
*/
 