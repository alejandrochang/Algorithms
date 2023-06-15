const currencies = {
  // key: currency: values: currenciesData
  'USD': [{ currency: 'EUR', value: 0.89 }, { currency: 'CAD', value: 1.1 }],
  'EUR': [{ currency: 'YEN', value: 128.68 }],
};

for (let key in currencies) {
  const currency = currencies[key];
  currency.forEach(obj => {

    // console.log({ key, obj });
    // generate the reverse currency
    // push that currency into currencies
  })
}