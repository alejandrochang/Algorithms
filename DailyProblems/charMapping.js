// Determine whether there exists a one-to-one character 
// mapping from one string s1 to another s2.

// For example, given s1 = abc and s2 = bcd,
// return true since we can map a to b, b to c, and c to d.

// Given s1 = foo and s2 = bar,
// return false since the o cannot map to two characters.

// I: s1, s2
// O: boolean

function oneToOne(s1, s2) {
  const charCount = {};
  let c = "a";

  for (let i = 0; i < s1.length; i++) {
    // if s1[i] is a key in charCount
    // eslint-disable-next-line no-prototype-builtins
    if (charCount[s1[i]]) {
      c = charCount[s1[i]]; // a
      if (c !== s2[i]) return false;
      // is s2[i] if not a value in charCount
    } else if (!Object.values(charCount).includes(s2[i])) {
      charCount[s1[i]] = s2[i];
    } else {
      return false;
    }
  }

  console.log({ charCount });
  return true;
}

const res = oneToOne('abc', 'bcd');
const res2 = oneToOne('foo', 'bar');
console.log({ res, res2 }); // true | false