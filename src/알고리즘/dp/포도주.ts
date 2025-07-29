const input=
`6
6
10
13
9
8
1`.trim().split('\n')

const T=Number(input[0]);
const score=input.slice(1).map(Number)
const dp=Array(T+1).fill(0)
score.unshift(0)

dp[1]=score[1]
dp[2]=dp[1]+score[2]

for (let i=3;i<=T;i++){
   dp[i] = Math.max(
  dp[i - 1],                           // 현재 안 마심
  dp[i - 2] + score[i],               // 현재만 마심
  dp[i - 3] + score[i - 1] + score[i] // 현재 + 전 마심
);
}
console.log(score)
console.log(dp)
console.log(Math.max(dp[T]))