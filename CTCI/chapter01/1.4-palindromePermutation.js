
/*
  High Level:
  1. char map - all chars have to have same number of repetiive chars, except for one should be fine 
  a. > 1 return false, else true
  return boolean;
  2. Sort if there is > 1 divisible # then return false
*/

function palinPerm(s1) {
  const charMap = {};
  for (let ch of s1.toLowerCase()) {
    charMap[ch] = charMap[ch] + 1 | 1;
  }

  return Object.values(charMap).filter((el) => el % 2 !== 0).length > 1;
}

function palinPerm2(s1) {
  const charMap = {};
  for (let ch of s1.toLowerCase()) {
    if (ch !== ' ') {
      charMap[ch] = charMap[ch] + 1 | 1;
    }
  }

  let count = 0;
  for (let key in charMap) {
    if (charMap[key] === 1) {
      count += 1;
    }
  }

  console.log({ charMap })

  return count < 2;
}


// palindrom - backwards and forwards
// permutation - abcd - bcda (same chars - not necesarily backward/fowrad)


// TESTS
console.log(palinPerm2('Tact Coa'), 'true'); // tact coa - atc cta
console.log(palinPerm2('Tact boa'), 'false');