const input=`12`
const N=Number(input)
console.log(N)
const dp=Array(N+1).fill(0)

dp[1]=1
dp[2]=3

for(let i=3;i<=N;i++){
    dp[i]=dp[i-1]+2*dp[i-2]
}
console.log(dp[N])