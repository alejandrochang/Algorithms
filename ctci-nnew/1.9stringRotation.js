// String Rotation:Assumeyou have a method isSubstring
// which checks if one word is a substring of another. Given two strings, sl and s2,
// write code to check if s2 is a rotation of sl using only one call to isSubstring (e.g.,"waterbottle" is a rotation of"erbottlewat").


// 'waterbottle' - isubstring(0,2) - 'erbottlewat'

function stringRotation(s1, s2) {

}


/* 
  Approaches:
  1. Iterate through string - use isubstring method from 0, i - 
  2. Check if isSustring + end of string === s2 -> if so rotation is true
  Time: O(n) - Space: O(n)
*/