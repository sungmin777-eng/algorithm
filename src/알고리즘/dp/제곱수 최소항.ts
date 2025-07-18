import * as fs from 'fs';

const input = fs.readFileSync('/dev/stdin', 'utf-8').trim();
const N = Number(input);

const dp: number[] = new Array(N + 1).fill(Infinity);
dp[0] = 0;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
  }
}

console.log(dp[N]);
















const dp=new Array(N+1).fill(Infinity);
dp[0]=0

for (if let i=1;i<=N;i++){
    for (let j=1;j*j<=i;j++){
        dp[i]=Math.min(dp[i],dp[i-j*j]+1)
    }
}

// //예: dp[4]를 계산할 때
// 가능한 j: 1, 2

// 시도1: dp[4 - 1] + 1 = dp[3] + 1

// 시도2: dp[4 - 4] + 1 = dp[0] + 1

// 여기서 dp[0]이 없으면 식이 성립이 안 돼요.
// 즉, dp[0]은 이 문제의 유일한 종료 조건이며 출발점이에요.

// 마치 재귀에서 if (n == 0) return 0; 같은 역할이에요.