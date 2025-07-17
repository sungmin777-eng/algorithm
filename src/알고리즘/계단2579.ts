
import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf8').trim().split('\n');

const N = Number(input[0]);
const score: number[] = [0]; // 1-based index
for (let i = 1; i <= N; i++) {
  score[i] = Number(input[i]);
}

const dp = new Array(N + 1).fill(0);

dp[1] = score[1];
if (N >= 2) {
  dp[2] = score[1] + score[2];
}
if (N >= 3) {
  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 2] + score[i],
      dp[i - 3] + score[i - 1] + score[i]
    );
  }
}

console.log(dp[N]);

