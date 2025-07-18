import * as fs from 'fs';
const [N, K] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const MOD = 1_000_000_000;
const dp: number[][] = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));


for (let j = 1; j <= K; j++) {
  dp[0][j] = 1;
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {
    dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
  }
}

console.log(dp[N][K]);