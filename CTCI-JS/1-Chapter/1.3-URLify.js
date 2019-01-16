

// O(n) Iterating through the string one n times the length

function urlify(str, length) {
  let words = str.split(' ');
  for (let i = 0; i < words.length - 1; i++) {
    words[i] = words[i] + '%20';
  }
  return words.join('');
}


console.log(urlify("Mr John Smith", 13)) // "Mr%20John%20Smith" 

// for every space we want to add a '%20', except for last