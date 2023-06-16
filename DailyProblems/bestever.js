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

console.log('currencies',currencies);

function convertCurrency(input, c1, c2) {
  const q = [c1];
  let currentConversion = input;
  let found = false;
  while (q.length > 0) {
    const key = q.shift();
    const currObjects = currencies[key];
    console.log({ currObjects, key });
    currObjects.map(({ currency, value }) => {
      currentConversion *= value;
      console.log({ q })
      if (key === c2) {
        found = true;
        console.log('plop', { key, currentConversion, c2 });
        return currentConversion;
      }

      if (!q.includes(currency) && !found) q.push(currency);
    })
  }

  return currentConversion;
}

const result = convertCurrency(5, 'YEN', 'USD');
console.log({ result });


// [[YEN, USD]]
// skip if its the same c1 currency
// if we found c2 currency continue with conversion

// yen -> EUR




// convert(5, yen, usd);
// convert(2, usd, eur);