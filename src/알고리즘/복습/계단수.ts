const N=2

const dp=Array.from({length:N+1},()=>Array(10).fill(0))

for (let i=1;i<=9;i++){
    dp[1][i]=1
}

for(let i=2;i<=N;i++){
    for (let j=0;j<=9;j++){
        if(j>0) dp[i][j]+=dp[i-1][j-1]
        if(j<9) dp[i][j]+=dp[i-1][j+1]
        console.log(dp)
}

}

const val = dp[N].reduce((sum, acc) => sum + acc, 0);
console.log(val)