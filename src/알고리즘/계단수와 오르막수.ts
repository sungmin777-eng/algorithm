import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const N = Number(input);

const MOD = 10007;
const dp: number[][] = Array.from({ length: N + 1 }, () => new Array(10).fill(0));

// 초기값: 길이 1일 때 1~9만 가능 (0으로 시작 X)
for (let j = 1; j <= 9; j++) {
  dp[1][j] = 1;
}

// 점화식: dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j + 1]
for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    if (j > 0) dp[i][j] += dp[i - 1][j - 1];
    if (j < 9) dp[i][j] += dp[i - 1][j + 1];
    dp[i][j] %= MOD;
  }
}

// 길이 N에서 끝나는 모든 계단수의 합
const answer = dp[N].reduce((sum, val) => (sum + val) % MOD, 0);
console.log(answer);
