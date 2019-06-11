
function minimumCents(n) {
  const coins = [25, 10, 5, 1];
  const minimumCoins = [];
  let i = 0;
  while (n > 0) {
    if (n - coins[i] >= 0) {
      minimumCoins.push(coins[i]);
      n -= coins[i]
    } else {
      i++;
    }
  }

  console.log(minimumCoins);

  return minimumCoins.length;
}

console.log(minimumCents(16)); // 1, 5, 10
// cents can be 1, 5, 10, 25

// have hard coded coins
// if coins % 