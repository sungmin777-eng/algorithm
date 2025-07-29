const input=
`6
10 20 10 30 20 50`.trim().split('\n')

const N=Number(input[0])
console.log(N)
const lines=input[1].split(' ').map(Number)


lines.unshift(0)
console.log(lines)
const dp=Array(N+1).fill(1)


for (let i = 1; i <= N; i++) {
  for (let j = 1; j < i; j++) {
    if (lines[i] > lines[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(dp)
