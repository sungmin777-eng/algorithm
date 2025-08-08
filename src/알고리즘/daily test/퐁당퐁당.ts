const input=`8
1 2 3 4 5 6 100 19`.trim().split('\n')

const data=input[1].split(' ').map(Number)
const N=+input[0]
const dp=Array(N+1).fill(0)

dp[0]=1
dp[1]=Math.max(data[0],data[1])
console.log(dp[1])
console.log(data)
for (let i=2;i<N;i++){
    dp[i]=Math.max(dp[i-1],dp[i-2]+data[i])
}
console.log(dp)