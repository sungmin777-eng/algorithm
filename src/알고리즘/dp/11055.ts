import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const dp = [...A]; // 자기 자신만 포함하는 경우가 기본값

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      dp[i] = Math.max(dp[i], dp[j] + A[i]);
    }
  }
}

console.log(Math.max(...dp));
