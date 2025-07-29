const n=3

const dp=Array.from({length:n+1},()=>Array(2).fill(0))

dp[1][0]=0
dp[1][1]=1

for(let i=2;i<=n;i++){  
        dp[i][0]=dp[i-1][1]+dp[i-1][0]
        dp[i][1]=dp[i-1][0]

}
const result=dp[n].reduce((sum,acc)=>sum+acc,0)
console.log(result)