function sumFibs(num) {
  let finnoBabe = 1;
  let sequence = [finnoBabe];
  const oddNums = [];
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (i < 1) sequence.push((finnoBabe += i));
    sequence.push((finnoBabe += sequence[i]));
  }
  for (let j = 0; j < sequence.length; j++) {
    if (sequence[j] % 2 !== 0) oddNums.push(sequence[j]);
  }
  for (let k = 0; k < oddNums.length; k++) {
    if (oddNums[k] <= num) {
      sum += oddNums[k];
    }
  }
  console.log(sum);
  return sum;
}

sumFibs(4000000);
