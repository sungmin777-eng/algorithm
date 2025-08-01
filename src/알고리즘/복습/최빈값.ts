// // 1) 입력 파싱
const input = `5
1
2
1
2
1`.trim().split('\n');
const N     = +input[0];
const cards = input.slice(1).map(Number);


const freq = new Map<number, number>();
for (const x of cards) {
  freq.set(x, (freq.get(x) || 0) + 1);
  console.log(freq)
}


let mode = cards[0];
let maxCount = 0;
for (const [num, cnt] of freq) {
  if (cnt > maxCount || (cnt === maxCount && num < mode)) {
    maxCount = cnt;
    mode = num;    
  }
}

console.log(mode);
