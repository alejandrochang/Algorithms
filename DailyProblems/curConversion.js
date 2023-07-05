// Question
// Paramenters:

// array of currency conversion rates. E.g. ['USD', 'GBP', 0.77] which means 1 USD is equal to 0.77 GBP
// an array containing a 'from' currency and a 'to' currency
// Given the above parameters, find the conversion rate that maps to the 'from' currency to the 'to' currency.
// Your return value should be a number.

// Example:
// You are given the following parameters:

// Rates: ['USD', 'JPY', 110] ['US', 'AUD', 1.45] ['JPY', 'GBP', 0.0070]
// To/From currency ['GBP', 'AUD']
// Find the rate for the 'To/From' curency. In this case, the correct result is 1.89.


// const conv = ['USD', 'GBP', 0.77];

// {'USD':}

// const newRate = {
//   'USD': [{ curr: 'JPY', rate: 110}, { curr: 'AUD', rate: 1.45}],
//   'JPY': [{ curr: 'USD', rate: 1/110}, { curr: 'GBP', rate: 1/.0070}],
//   'AUD': [{ curr: 'USD', rate: 1/1.45}],
// }

const rates = [['USD', 'JPY', 110],['USD', 'AUD', 1.45],['JPY', 'GBP', 0.0070]];
const convert = ['GBP', 'AUD']; // 1.89

function formatRates(list) {
  const map = {};

  for (let rate of list) {
    const [c1, c2, r] = rate;
    const dividedRate = 1 / r;
    map[c1] ? map[c1] = [...map[c1], { curr: c2, r }] : map[c1] = [{ curr: c2, r }];
    map[c2] ? map[c2] = [...map[c2], { curr: c1, r: dividedRate }] : map[c2] = [{ curr: c1, r: dividedRate }];
  }

  return map;
}


function convertCurrency(r, [c1, c2]) {
  const formatedRates = formatRates(r);
  console.log(JSON.stringify(formatedRates, null, 4));

  const q = [c2];
  let rate = 1;
  const visited = {};

  while (q.length > 0) {
    const currencyKey = q.shift(); // 'AUD';
    visited[currencyKey] = true;
    const currencies = formatedRates[currencyKey];

    for (let { curr, r } of currencies) {
      console.log({ currencyKey, rate, currencies })

      if (curr === c1) {
        console.log('plop', { curr, c1, rate });
        return rate;
      }

      // push children
      if (!visited[curr]) {
        q.push(curr);
        rate *= r;
      }
    }
  }

  console.log(JSON.stringify(formatedRates, null, 4));
  return { rate, visited };
}

console.log('result', convertCurrency(rates, convert));
// ex. 'US', 'AUD', 1US = 1.45 - (1 / 1.45).689 USD = 1 AUD

// 1. Create list of all forward/backward compatible exchanges
// 2. BFS through connecting children