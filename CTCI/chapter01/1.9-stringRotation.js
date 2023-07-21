
/*
  High Level:
  1. concatenated string + of string2 + string2 should get the full word
    a. Time: O(n) - O(1) check if string1 is inside
*/

function stringRotation(s1, s2) {
  if (s1.length !== s2.length) return false;

  return (s2 + s2).includes(s1);
}

console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);