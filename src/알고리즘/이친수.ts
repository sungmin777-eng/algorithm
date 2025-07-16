const dp=new Array(N+1).fill(0)
dp[1]=1
dp[2]=1

for(i=3;i<=N;i++){
    dp[i]=dp[i-1]+dp[i-2]
}
console.log(dp[N])

##이친수 고급화
const dp: number[][] = Array.from({ length: N + 1 }, () => new Array(2).fill(0));

dp[1][0] = 0;
dp[1][1] = 1;

for (let i = 2; i <= N; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 1][1]; // 0 뒤엔 0도 되고 1도 됨
  dp[i][1] = dp[i - 1][0];               // 1 뒤엔 0만 가능
}

console.log(dp[N][0] + dp[N][1]);
