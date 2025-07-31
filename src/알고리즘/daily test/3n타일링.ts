const N = 6; 

const dp = Array(N + 1).fill(0);
dp[0] = 1;
dp[2] = 3;

for (let i = 4; i <= N; i += 2) {
  dp[i] = dp[i - 2] * 3;
  for (let j = i - 4; j >= 0; j -= 2) {
    dp[i] += dp[j] * 2;
  }
}

console.log(N % 2 === 1 ? 0 : dp[N]);
