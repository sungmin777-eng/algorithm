const n = 3;

const dp = Array.from({ length: n + 1 }, () => Array(10).fill(0));


for (let i = 0; i <= 9; i++) {
    dp[1][i] = 1;
}

// 점화식: dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
        if (j === 0) dp[i][j] = dp[i - 1][j];
        else dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
}

console.log(dp);
