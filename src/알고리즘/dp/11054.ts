import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const dp1 = Array(N).fill(1); // LIS
const dp2 = Array(N).fill(1); // LDS

// 증가하는 부분 수열 (LIS)
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      dp1[i] = Math.max(dp1[i], dp1[j] + 1);
    }
  }
}

// 감소하는 부분 수열 (LDS)
for (let i = N - 1; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (A[j] < A[i]) {
      dp2[i] = Math.max(dp2[i], dp2[j] + 1);
    }
  }
}

// 가장 긴 바이토닉 부분 수열 길이 계산
let result = 0;
for (let i = 0; i < N; i++) {
  result = Math.max(result, dp1[i] + dp2[i] - 1);
}

console.log(result);
