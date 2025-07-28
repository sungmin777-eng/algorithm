const input =
`3
26 40 83
49 60 57
13 89 99`.trim().split('\n');

const N = Number(input[0]);
const cost = input.slice(1).map(line => line.split(' ').map(Number));
const dp = Array.from({ length: N }, () => Array(3).fill(0));


dp[0][0] = cost[0][0]; 
dp[0][1] = cost[0][1]; 
dp[0][2] = cost[0][2];

for (let i = 1; i < N; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + cost[i][0]; 
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + cost[i][1]; 
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + cost[i][2]; 
}

const result = Math.min(...dp[N - 1]);
console.log(result)