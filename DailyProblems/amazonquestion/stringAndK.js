// Given a string s and an integer k, break up the string into multiple texts such that each text 
// has a length of k or less. You must break it up so that words don't break across lines. 
// If there's no way to break the text up, then return null.

// You can assume that there are no spaces at the ends of the string and that there is exactly one space between each word.

// For example, given the string "the quick brown fox jumps over the lazy dog" and k = 10, 
// you should return: ["the quick", "brown fox", "jumps over", "the lazy", "dog"]. No string in the list has a length of more than 10.


function stringAndK(str, k) {
  let arr = str.split(' ');
  let result = [];
  let currentWord= '';
  for (let i = 0; i < arr.length; i++) {
    let nextLength = (currentWord + ' ' + arr[i]).length;
    if (currentWord.length < 10 && nextLength <= 10) {
      if (currentWord.length === 0) {
        currentWord += arr[i];
      } else {
        currentWord += ' ' + arr[i];
      }
    } else {
      result.push(currentWord);
      currentWord = arr[i];
    }
  }
  if (currentWord.length) {
    result.push(currentWord);
  } 
  return result;
}

console.log(stringAndK("the quick brown fox jumps over the lazy dog", 10)); // ["the quick", "brown fox", "jumps over", "the lazy", "dog"]

// iterate through words. 
// check to see if any given word is < 10, check next word to see if added is greater than 10 e.g. consider spaces to = 1 space
  // if not, add word to string
  // if yes, add the string concatenated thus far to the result arr
// return the result array.  