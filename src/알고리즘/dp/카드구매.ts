const input=
`4
1 5 6 7`.trim().split('\n')

const N=Number(input[0])

const price=input[1].split(' ').map(Number)

price.unshift(0)
console.log(price)

const dp=Array(N+1).fill(0)

dp[0]=0

let max=0;
for (let i = 1; i <= N; i++) {
  let max = 0;
  // 마지막에 k개 팩을 샀을 때
  for (let k = 1; k <= i; k++) {
    // prices[k-1]는 P_k
    max = Math.max(max, dp[i - k] + price[k - 1]);
  }
  dp[i] = max;
}

console.log(dp[N]);