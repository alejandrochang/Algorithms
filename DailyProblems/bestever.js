const currencies = {
  // key: currency: values: currenciesData
  'USD': [{ currency: 'EUR', value: 0.89 }, { currency: 'CAD', value: 1.1 }],
  'EUR': [{ currency: 'YEN', value: 128.68 }],
};

for (let key in currencies) {
  const struct = currencies[key];
  struct.forEach(({ currency, value }) => {
    // generate the reverse currency
    if (currencies[currency]) {
      currencies[currency].push({ currency: key, value: 1 / value })
    } else if (currency) {
      // avoid undefined currency here
      currencies[currency] = [{ currency: key, value: 1 / value }];
    }
  })
}

function convertCurrency(input, c1, c2) {
  const q = [c1];
  let currentConversion = input;
  const visitedCurrencies = {};
  while (q.length > 0) {
    const key = q.shift();
    if (key === c2) return currentConversion;
    visitedCurrencies[key] = true;
    const currencyList = currencies[key];

    currencyList.forEach(({ currency: currKey, value }) => {
      if (!visitedCurrencies[currKey]) {
        q.push(currKey);
        currentConversion *= value;
      }
    });
  }

  return null;
}

const result = convertCurrency(5, 'YEN', 'USD'); // 0.04365851358478309
console.log({ result });


// [[YEN, USD]]
// skip if its the same c1 currency
// if we found c2 currency continue with conversion

// yen -> EU
// convert(5, yen, usd);
// convert(2, usd, eur);