// Get all primeFactors from a given input

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

const primeFactors = (n) => {
  let factors = [];

  for (let i = 2; i < n; i++) {
    if (isPrime(i) && n % i === 0) { // have to check if itsPrime
      factors.push(i);
    }
  }

  return factors;
}

console.log(primeFactors(69)); // [3, 23]
console.log(primeFactors(24)); // [ 2, 3 ]
// I: number
// O: array
// Time: O(n)
// Space: O(n)

// if it isPrime and divisible by number store