// Input: "fun&!! time"
// Output: time


const longestWord = (sen) => {
  let result = '';
  for (let word of sen.replace(/[^\w]/g, ' ').split(' ')) {
    if (result.length < word.length) {
      result = word;
    }
  }
  
  return result;
}

// Input: "fun&!! time"
// Output: time
// Input: "I love dogs"
// Output: love

console.log(longestWord("fun&!! time")); // time
console.log(longestWord("I love dogs")); // love