function sumPrimes(num) {
  let primeNums = [];
  let list = [];
  let sum = 0;

  const checkPrime = (digit) => {
    for (let k = 2; k < digit; k++) {
      if (digit % k === 0) return false;
    }
    list.push(digit);
  };
  for (let i = 2; i <= num; i++) {
    checkPrime(i);
  }

  for (let j = 0; j < list.length; j++) {
    sum += list[j];
  }
  return sum;
}

sumPrimes(30);
