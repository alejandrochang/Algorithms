// String Rotation:Assumeyou have a method isSubstring
// which checks if one word is a substring of another. Given two strings, sl and s2,
// write code to check if s2 is a rotation of sl using only one call to isSubstring (e.g.,"waterbottle" is a rotation of"erbottlewat").


// 'waterbottle' - isubstring(0,2) - 'erbottlewat'

function stringRotation(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    let rotatedString = s1.substring(i) + s1.slice(0, i); // 'wat'
    if (rotatedString === s2) {
      return true;
    }
  }

  return false;
}

let result = stringRotation('waterbottle', 'erbottlewat');
console.log({ result }); // true

function stringRotation2(s1, s2) {
  if (s1.length !== s2.length) return false;
  const concatString = `${s1}${s1}`;
  return concatString.includes(s2);
}


let result2 = stringRotation2('waterbottle', 'erbottlewat');
console.log({ result2 }); // true

/* 
  Approaches:
  1. Iterate through string - use isubstring method from 0, i - 
  2. Check if isSustring + end of string === s2 -> if so rotation is true
  Time: O(n) - Space: O(n)
  Space of O(1) if you do it in place - instead of saving rotatedString
*/