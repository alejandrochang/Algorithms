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