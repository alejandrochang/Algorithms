// list the prime factors of an input
// return array of all primeNumbers

// I: int
// O: arr
// Time:  
// Space: 

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
    if (isPrime(i) && n % i === 0) {
      factors.push(i);
    }
  }

  return factors;
}

console.log(primeFactors(5)); // []
console.log(primeFactors(21)); // [ 3, 7 ]
console.log(primeFactors(77)); // [ 7, 11 ]
