// Input: "fun&!! time"
// Output: time


const longestWord = (sen) => {
  let result = '';
  let words = sen.replace(/[^\w]/g, ' ').split(' ');
  for (let word of words) {
    if (result.length < word.length) {
      result = word;
    }
  }
  
  return result;
}

// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"cle
// Output: love

console.log(longestWord("fun&!! time")); // time
console.log(longestWord("I love dogs")); // love