const input = `6
10
20
15
25
10
20`.trim().split('\n');
const N     = +input[0];
const score = input.slice(1).map(Number);

// dp[i][k]: i번째 계단, 마지막 연속 1칸 이동 k번
const dp = Array.from({length: N}, () => [ -1e9, -1e9, -1e9 ]);

// 기저
dp[0][0] = score[0];
dp[0][1] = score[0];

if (N > 1) {
  dp[1][0] = score[1];
  dp[1][1] = dp[0][0] + score[1];
  dp[1][2] = dp[0][1] + score[1];
}

for (let i = 2; i < N; i++) {
  // 1) 2칸 이동
  dp[i][0] = Math.max(dp[i-2][0], dp[i-2][1], dp[i-2][2]) + score[i];

  // 2) 1칸 이동
  dp[i][1] = dp[i-1][0] + score[i];
  dp[i][2] = dp[i-1][1] + score[i];
}

// 마지막 계단에 올 때 얻을 수 있는 최대 점수
const answer = Math.max(...dp[N-1]);
console.log(answer);
