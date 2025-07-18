import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin').toString().trim();
const N = Number(input);

const dp: number[] = new Array(N + 1).fill(0);

if (N % 2 === 1) {
  console.log(0); 
} else {
  dp[0] = 1;
  dp[2] = 3;

  for (let i = 4; i <= N; i += 2) {
    dp[i] = dp[i - 2] * 3;
    for (let j = 4; j <= i; j += 2) {
      dp[i] += dp[i - j] * 2;
    }
  }

  console.log(dp[N]);
}