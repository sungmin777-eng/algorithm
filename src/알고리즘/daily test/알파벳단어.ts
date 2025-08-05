const input=`baekjoon`.trim().split('');

console.log(input)


const counts = new Array(26).fill(0);
for (const ch of input) {
  counts[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
}

console.log(counts.join(' '));