const dp: number[][] = Array.from({ length: N + 1 }, () => new Array(2).fill(0));

// 초기값
dp[1][0] = 0; // 길이 1, 끝이 0인 이친수는 없음
dp[1][1] = 1; // 유일한 이친수: "1"

for (let i = 2; i <= N; i++) {
dp[i][0] = dp[i - 1][0] + dp[i - 1][1]; // 끝이 0인 경우
dp[i][1] = dp[i - 1][0];               // 끝이 1인 경우
}

console.log(dp[N][0] + dp[N][1]);

const dp:number=Array.from({length(N+1)},()=>new Array(10).fill(0))

for(let j=0;j<=9;j++){
    dp[1][j]=1
}

for (let i=2;i<=9;i++){
    for(let j=1;j<=9;j++){
        dp[i][j]=(dp[i][j-1]+dp[i-1][j])%mod 10007
    }
}
const answer=dp(N).reduece((sum,val)=>(sum+val)%mod)
console.log(answer)


const mod=10007
const dp:number[][]=Array.from({length:N+1},()=>new Array(10).fill(0))

for(j=1;j<=9;j++){
    dp[1][j]=1
}

for(i=1;i<=N;i++0){
    if (j === 9) {dp[i[j]=dp[i][j-1]]}
    for(j=0;j<=8;j++){
        dp[i][j]=(dp[i][j-1]+dp[i][j+1])%mod
    }
    
}
const answer=dp(N).reduce((sum,val)=>(sum+val),0)
console.log(answer)

// 백준 11057번 오르막 수 문제 (https://www.acmicpc.net/problem/11057)
// TypeScript + Node.js 환경

import * as fs from 'fs';
const input = Number(fs.readFileSync('/dev/stdin').toString().trim());

const MOD = 10007;
const N = input;

// dp[i][j] = 길이가 i이고 마지막 숫자가 j인 오르막 수의 개수
const dp: number[][] = Array.from({ length: N + 1 }, () => new Array(10).fill(0));

// 초기 조건: 길이가 1일 때, 0~9는 각각 1개씩 가능
for (let i = 0; i <= 9; i++) {
  dp[1][i] = 1;
}

// 점화식 적용
for (let i = 2; i <= N; i++) {
  for (let j = 0; j <= 9; j++) {
    for (let k = 0; k <= j; k++) {
      dp[i][j] = (dp[i][j] + dp[i - 1][k]) % MOD;
    }
  }
}

// 정답: 길이 N인 모든 오르막 수의 합
const answer = dp[N].reduce((acc, cur) => (acc + cur) % MOD, 0);
console.log(answer);


// **스티커문제** 2차원 좌표평면 

// 입력값 준비 (예: 백준 입력 방식)
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]); // 테스트 케이스 수
let line = 1; // 현재 읽는 줄

for (let t = 0; t < T; t++) {
  const n = Number(input[line++]); // 스티커 열 수

  // 각 줄의 점수 배열을 2차원 배열로 만들기
  const sticker: number[][] = [
    input[line++].split(' ').map(Number), // 윗 줄 스티커 점수
    input[line++].split(' ').map(Number), // 아랫 줄 스티커 점수
  ];

  // dp[0][i]는 윗 줄에서 i번째 스티커를 선택했을 때 최대 점수
  // dp[1][i]는 아랫 줄에서 i번째 스티커를 선택했을 때 최대 점수
  const dp: number[][] = [
    new Array(n).fill(0),
    new Array(n).fill(0),
  ];

  // 초기값 설정
  dp[0][0] = sticker[0][0]; // 윗 줄 첫 번째 스티커 선택
  dp[1][0] = sticker[1][0]; // 아랫 줄 첫 번째 스티커 선택

  if (n > 1) {
    dp[0][1] = dp[1][0] + sticker[0][1]; // 윗 줄 두 번째 스티커
    dp[1][1] = dp[0][0] + sticker[1][1]; // 아랫 줄 두 번째 스티커
  }

  // 점화식 적용
  for (let i = 2; i < n; i++) {
    // 윗 줄 i번째 스티커를 선택할 때:
    // 아랫 줄 (i-1) 또는 (i-2)번째 선택 후 현재 점수 추가
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + sticker[0][i];

    // 아랫 줄 i번째 스티커를 선택할 때:
    // 윗 줄 (i-1) 또는 (i-2)번째 선택 후 현재 점수 추가
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + sticker[1][i];
  }

  // 결과 출력: 마지막 열까지 봤을 때 둘 중 최대 점수
  console.log(Math.max(dp[0][n - 1], dp[1][n - 1]));
}


import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const T = Number(input[0]); 
let line = 1;

for (let t = 0; t < T; t++) {
  const n = Number(input[line++]);


  const sticker: number[][] = [
    [0, ...input[line++].split(' ').map(Number)],
    [0, ...input[line++].split(' ').map(Number)],
  ];


  const dp: number[][] = [
    new Array(n + 1).fill(0), 
    new Array(n + 1).fill(0), 
  ];

  dp[0][1] = sticker[0][1];
  dp[1][1] = sticker[1][1];

  for (let i = 2; i <= n; i++) {
    dp[0][i] = Math.max(dp[1][i - 1], dp[1][i - 2]) + sticker[0][i];
    dp[1][i] = Math.max(dp[0][i - 1], dp[0][i - 2]) + sticker[1][i];
  }

  console.log(Math.max(dp[0][n], dp[1][n]));
}
