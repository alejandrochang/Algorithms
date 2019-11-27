// String Rotation
// ASsume you have a method isSubstring whichc cheks if one word 
// is a substring of another. Given two strings, s1 and s2
// write code to check if s2 is a rotation of s1 using only one call 
// to isSubstring (ex. waterboottle is a rotation of erbottlewat)

const stringRotation = (s1, s2) => {
  let fullString = s2 + s2;
  return fullString.includes(s1);
}

const s1 = 'waterbottle';
const s2 = 'erbottlewat';

console.log(stringRotation(s1, s2)); // true
