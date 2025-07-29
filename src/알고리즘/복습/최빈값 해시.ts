const data=[1,1,2,3,3,4,5,5]

function getMostFrequent(arr: number[]): number {
  const freq = new Map<number, number>();

  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
    console.log(freq)
  }

  let maxFreq = 0;
  let result = Infinity;

  for (let [num, count] of freq) {
    if (count > maxFreq || (count === maxFreq && num < result)) {
      maxFreq = count;
      result = num;
      console.log(maxFreq)
    }
  }

  return result;
}
console.log(getMostFrequent(data))
