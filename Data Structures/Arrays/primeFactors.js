

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < Math.sqrt(n) ; i++) {
    if (n % i === 0) return false;
  }

  return true;
}


const primeFactors = (num) => {
  let result = [];

  for (let i = 0; i < num; i++) {
    if (num % i === 0 && isPrime(i)) {
      result.push(i);
    }
  }

  return result;
}



console.log(primeFactors(21)); // 

// factor: n % i === 0 && isPrime