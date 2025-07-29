const input=
`2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`.trim().split('\n')
const T=Number(input[0])

let line=1
for (let i=0;i<T;i++){
    const N=Number(input[line++])
     const score: number[][] = [
    input[line++].split(' ').map(Number), 
    input[line++].split(' ').map(Number), 
  ];
  console.log(score)
  const dp=Array.from({length:2},()=>Array(N).fill(0))
  
  dp[0][0]=score[0][0]
  dp[1][0]=score[1][0]
  dp[1][1]=dp[0][0]+score[1][1]
  dp[0][1]=dp[1][0]+score[1][0]

   for (let i = 2; i < N; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + score[0][i];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + score[1][i];
  }

  console.log(dp)
}