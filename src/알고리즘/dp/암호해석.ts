
const alphabet:number[]=[1,2,3,4,5,...,26]
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
const MOD = 1000000;
const n = input.length;
const dp = new Array(n + 1).fill(0);

if (input[0] === '0') {
  console.log(0);
  process.exit(0);
}

dp[0] = 1;
dp[1] = 1;

for (let i = 2; i <= n; i++) {
  const oneDigit = Number(input[i - 1]);
  const twoDigit = Number(input.slice(i - 2, i));

  // 한 자리 암호 해석 가능 (1~9)
  if (oneDigit >= 1 && oneDigit <= 9) {
    dp[i] += dp[i - 1];
    dp[i] %= MOD;
  }

  // 두 자리 암호 해석 가능 (10~26)
  if (twoDigit >= 10 && twoDigit <= 26) {
    dp[i] += dp[i - 2];
    dp[i] %= MOD;
  }
}

console.log(dp[n]);
