
/*
  High Level:
  1. Replace whitespace chars with '%20' + end string truncated at the end
    a. Time: O(n), Space: O(n)
*/

function urlify(str) {
  let res = [];
  for (let ch of str.trim().split('')) {
    if (ch === ' ') {
      res.push('%20');
    } else {
      res.push(ch);
    }
  }

  return res.join('');
}

function urlify2(str) {
  return str.trim().replaceAll(' ', '%20');
}


console.log(urlify2('Mr John Smith    '), 'Mr%20John%20Smith');
console.log(urlify2("Sai Charan P"), 'Sai%20Charan%20P');