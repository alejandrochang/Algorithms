// 1. Given a list of cards (["2S","4H","JS"....]), calculate the total value of the cards from the card number, ignoring the suit.

const cards = ["2S","4H","JS"];
const cards2 = ["2S","4H","10S", "JS"]; // 26
const faceMap = {
  'J': 10,
  'Q': 10,
  'K': 10,
  'A': 11,
};

function getValueOfCards(list) {
  if (!list) return 0; 
  let total = 0;
  for (let card of list) {
    // Handle 10 edge case 10S
    const ch = card.length === 3 ? '10' : card.slice(0, 1);
    const num = faceMap[ch] || parseInt(ch, 10);
    total += num;
  }

  return total;
}

function getCardValue(list) {
  return list.reduce((acc, curr) => {
    const ch = curr.length === 3 ? '10' : curr[0];
    const num = faceMap[ch] || parseInt(ch, 10);
    return acc + num;
  }, 0);
}


const res = getCardValue(cards); //
const res2 = getCardValue(cards2); //
// console.log({ res, res2 }); // 16 - 26


// Given a string of the form "23??1???7", replace the question marks with all different permutations of 0s and 1s.

const str = "23??1???7";
function permutator(s) {
  const result = [];

  const q = [s];
  while (q.length > 0) {
    let length = q.length;
    for (let i = 0; i < length; i++) {
      let str = q.shift();
      let newstr = str.replace('?', '1');
      let newStr2 = str.replace('?', '0');

      if (newstr.includes('?')) q.push(newstr);
      if (newStr2.includes('?')) q.push(newStr2);

      if (!newstr.includes('?')) result.push(newstr);
      if (!newStr2.includes('?')) result.push(newStr2);
    }
  }

  return [...new Set(result)];
}

const solution = permutator(str);
console.log({ solution });