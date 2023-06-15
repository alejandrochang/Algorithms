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
      currencies[currency] = [{ key, value: 1 / value }];
    }
    // push that currency into currencies
  })
}

console.log('mutated?', currencies);