


function oneAway(s1, s2) {

}


// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);


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
