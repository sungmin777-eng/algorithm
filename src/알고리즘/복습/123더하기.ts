const input = `3
4
7
10`.trim().split('\n').map(Number);

const T = input[0];
const nums = input.slice(1);
const maxN = Math.max(...nums);

const dp = Array(maxN + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= maxN; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

for (const n of nums) {
  console.log(dp[n]);
}
