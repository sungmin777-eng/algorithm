const input=
`2
1 3
5`.trim().split('\n')

const N=+input[0]
const lines=input[1].split(' ').map(Number)
const K=+input[2]

const INF = K + 1;  
const dp: number[] = [0];

lines.sort((a, b) => a - b);

let losingNumber = -1;
for (let m = 1; ; m++) {
    console.log(m)
  let best = INF;
  for (const c of lines) {
    if (c > m) break;
    const prev = dp[m - c];
    if (prev + 1 < best) best = prev + 1;
  }
  dp[m] = best;

  if (best > K) {
    losingNumber = m;
    break;
  }
}


const m = losingNumber!;
const loser = (m % 2 === 1) ? '홀순이' : '짝순이';
const winner = (m % 2 === 1) ? '짝순이' : '홀순이';

// 3) 결과 출력
console.log(`${winner} ${m}`);