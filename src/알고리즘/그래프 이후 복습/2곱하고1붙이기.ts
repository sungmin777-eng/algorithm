const input=`2 162`.trim().split(' ').map(Number);
const [x,y]=input

const dp=Array(y+1).fill(0)

for(let i=2;i<=y;i++){
    if(i<=10&&i%2===0) dp[i]=dp[i/2]+1
    else if(i>=10) 
            dp[i]=Math.min(Math.floor(dp[(i-1)/10]))+1
        if(i%2===0) dp[i]=Math.min(Math.floor(dp[(i-1)/10]),Math.floor(dp[i/2]))+1
    }
    else dp[i]=-1

console.log(dp[12])

