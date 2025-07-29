function compressFrequency(s: string): string {
  const freq: { [key: string]: number } = {};

  for (let ch of s) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  return Object.keys(freq)
    .sort()
    .map(ch => ch + freq[ch])
    .join('');
}
console.log(compressFrequency("aaabbcdddb"))