const input=
`4
1 5 6 7`.trim().split('\n')

const N=+input[0]
const price=[0,...input[1].split(' ').map(Number)]

const dp=Array(N+1).fill(0)

dp[1]=1
for (let i=1;i<=N;i++){
    let maxval=0;
    for (let j=1;j<=i;j++){
        maxval=Math.max(maxval,dp[i-j]+price[j])
    }
    dp[i]=maxval
}
console.log(dp[N])