/*
  High Level:
  1. Iterate over string, check if next === prev, add count (default: 1)
  2. Use array struct [] - pop(), and reset arr if not equal to another - pass tuple
*/

function strComp(s) {
  let resultStr = '';
  let charCount = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[i + 1]) {
      resultStr += `${s[i]}${charCount}`
      // reset string
      charCount = 1;
    } else {
      charCount++;
    }
  }

  return resultStr;
}


// Test
console.log('aaaaaa', strComp('aaaaaa') === 'a6', 'true');
console.log('aabcccccaaa', strComp('aabcccccaaa') === 'a2b1c5a3', 'true');