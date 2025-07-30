const input = `10
1 5 2 1 4 3 4 5 2 1`.trim().split('\n');
const N     = +input[0];
const lines = input[1].split(' ').map(Number);

// 1) dpInc, dpDec 초기화
const dpInc = Array(N).fill(1);
const dpDec = Array(N).fill(1);

// 2) dpInc 채우기 (왼쪽→오른쪽, LIS)
for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (lines[i] > lines[j]) {
      dpInc[i] = Math.max(dpInc[i], dpInc[j] + 1);
    }
  }
}

// 3) dpDec 채우기 (오른쪽→왼쪽, “시작점” 감소 수열)
for (let i = N - 1; i >= 0; i--) {
  for (let j = N - 1; j > i; j--) {
    if (lines[i] > lines[j]) {
      dpDec[i] = Math.max(dpDec[i], dpDec[j] + 1);
    }
  }
}
console.log(dpDec)
console.log(dpInc)
// 4) 답 계산

let answer = 0;
for (let i = 0; i < N; i++) {
  // 증감에서 lines[i]가 두 번 세어지므로 −1
  answer = Math.max(answer, dpInc[i] + dpDec[i] - 1);
  console.log(answer)
}

console.log(answer);  // 7
