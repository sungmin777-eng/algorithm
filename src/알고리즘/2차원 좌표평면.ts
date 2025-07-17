const input = `
2
5
50 10 100 20 40
30 50 70 10 60
7
10 30 10 50 100 20 40
20 40 30 50 60 20 80`.trim().split('\n');



const T = Number(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[line++]);

if (N < 1) {
    console.warn(`⚠️ 스티커 개수는 1 이상이어야 합니다. 테스트케이스 #${t + 1} 건너뜀`);
    continue;
  }

  const sticker = [
    [0, ...input[line++].split(' ').map(Number)],
    [0, ...input[line++].split(' ').map(Number)],
  ];


  const dp=[
    new Array(N+1).fill(0),new Array(N+1).fill(0)
];

dp[0][1]=sticker[0][1];
dp[1][1]=sticker[1][1];

if (N >= 2) {
    dp[0][2] = sticker[0][2] + dp[1][1];
    dp[1][2] = sticker[1][2] + dp[0][1];
  }

for(let i=3;i<=N;i++){
    dp[0][i]=Math.max(dp[1][i-1],dp[1][i-2])+sticker[0][i];
    dp[1][i]=Math.max(dp[0][i-1],dp[0][i-2])+sticker[1][i];
   
}
 const result = Math.max(dp[0][N], dp[1][N]);
 
  console.log(result);
}
