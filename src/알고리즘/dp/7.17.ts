// ✅ 문제 1. 계단 오르기 (복습)
// [DP, 점화식 설계 연습]

// 총 N개의 계단이 있고, 각 계단마다 점수가 주어집니다.
// 계단은 1칸 또는 2칸씩 오를 수 있으며,
// 연속으로 3개의 계단을 밟을 수 없습니다.
// 마지막 계단은 반드시 밟아야 할 때, 얻을 수 있는 최대 점수를 구하세요.

const N=Number(input[0])
const score=[0]
for(let i=1;i<=N;i++){
    score[i]=Number(input[i])
}
const dp=new Array(N+1).fill(0)

dp[1]=score[1]
dp[2]=score[1]+score[2]

for (let i=3;i<=N;i++){
    dp[i]=
    Math.max(dp[i-2]+score[i], dp[i-3]+score[i-1]+score[i])
}
console.log(dp[N])

🧩 문제 3: 연속 부분합 (최대값)
const input=[11,10
,10
-4,
3,
1,
5,
6,
-35,
12,
21,
-1]


설명: 연속된 부분의 합이 가장 큰 경우의 합 구하기

const T=Number(input[0])
for(let i=1;i<=T;i++){
    const score=Array(T+1).fill(input[i])
}

const dp= new Array(N+1).fill(0)

for(let i=2;i<=T;i++){
    dp[i]=dp[i-1]+dp[i+1]
    score[i]
    if (dp[i]<0){
        Math.sum(score[i-1])
    }
}

// ✅ 문제 3 (연속 부분합) — 정확한 접근법
// 이건 연속된 부분의 합 중 최대값을 구하는 전형적인 1차원 DP 문제입니다.
// 바로 카데인 알고리즘(Kadane's Algorithm) 구조가 쓰여요.

// 📌 핵심 아이디어
// ts
// 복사
// 편집
// dp[i] = Math.max(dp[i-1] + arr[i], arr[i])
// 의미:

// arr[i]를 단독으로 시작하는 게 좋은지,

// 이전 누적합 + arr[i]로 이어가는 게 좋은지 판단함

// 그리고 나서 전체 dp 배열에서 최댓값을 출력하면 됨

const N = Number(input[0]);
const arr = input.slice(1).map(Number);
const dp = new Array(N);

dp[0] = arr[0];
let maxSum = dp[0];

for (let i = 1; i < N; i++) {
  dp[i] = Math.max(dp[i - 1] + arr[i], arr[i]);
  maxSum = Math.max(maxSum, dp[i]);
}

console.log(maxSum);


const N= Number(input[0]);
const arr = input.slice(1).map(Number);
const dp= new Array(N);

dp[0]=arr[0];
let maxSum=dp[0];
for (let i=1;i<N;i++){
    dp[i]=Math.max(dp[i-1]+arr[i],arr[i])
    maxSum=Math.max(maxSum,dp[i]);
}
console.log(maxSum)


// ##스티커 문제 복습 2*n좌표평면에서 점수합 최대값 구하기
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

  const sticker = [
    [0, ...input[line++].split(' ').map(Number)],
    [0, ...input[line++].split(' ').map(Number)],
  ];

  console.log(sticker);
}


