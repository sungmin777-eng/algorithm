const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const prices = input[1].split(" ").map(Number);

// dp[i] = 카드 i개를 구매할 때 지불할 수 있는 최대 금액
const dp = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + prices[j - 1]);
  }
}

console.log(dp[N]);
