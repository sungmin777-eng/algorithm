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


const N = 5;
const score = [10, 20, 15, 25, 10]; // 1번~5번 계단 점수
const score=new Array(N+1)  //const는 한 번만 써야됨.
const dp=new Array(N+ 1).fill(0)
dp[1]=score[1]
dp[2]=score[1]+score[2]
for (let i=3;i<=N;i++){
  dp[i]=Math.max(
    dp[i-2]+score[i],
    dp[i-3]+score[i-1]+score[i]
  )
}
console.log(dp[N])

const N = 5;
const score = [0, 10, 20, 15, 25, 10]; // 1-based index
const dp = new Array(N + 1).fill(0);

dp[1] = score[1];
dp[2] = score[1] + score[2];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + score[i],
    dp[i - 3] + score[i - 1] + score[i]
  );
}

console.log(dp[N]); // ✅ 결과 출력

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const score = [0]; // 1-based 인덱스
for (let i = 1; i <= N; i++) {
  score[i] = Number(input[i]);
}

const dp = new Array(N + 1).fill(0);
dp[1] = score[1];
dp[2] = score[1] + score[2];

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 2] + score[i],
    dp[i - 3] + score[i - 1] + score[i]
  );
}

console.log(dp[N]);
