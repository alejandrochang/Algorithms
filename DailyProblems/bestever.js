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
      currencies[currency].push({ key, value: 1 / value })
    } else if (currency) {
      // avoid undefined currency here
      currencies[currency] = [{ key, value: 1 / value }];
    }
  })
}


function convertCurrency(input, c1, c2) {
  const q = [c1];
  while (q.length > 0) {
    const key = q.shift();
    const curr = currencies[key];
    console.log({ curr });
  }
}

const result = convertCurrency(5, 'YEN', 'USD');
console.log({ result });
// console.log('updated currencies', currencies);


// [[YEN, USD]]
// skip if its the same c1 currency
// if we found c2 currency continue with conversion

// yen -> EUR




// convert(5, yen, usd);
// convert(2, usd, eur);