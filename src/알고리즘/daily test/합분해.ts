const [N,K]=[6,4]
const MOD = 1_000_000_000;
const dp = Array.from({ length: N + 1 }, () => Array(K + 1).fill(0));


for (let i = 0; i <= N; i++) dp[i][1] = 1;
for (let j = 1; j <= K; j++) dp[0][j] = 1;


for (let n = 1; n <= N; n++) {
  for (let k = 2; k <= K; k++) {
    dp[n][k] = (dp[n - 1][k] + dp[n][k - 1]) % MOD;
  }
}
console.log(dp)

console.log(dp[N][K]);