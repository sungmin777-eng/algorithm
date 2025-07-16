
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const A = input[1].split(' ').map(Number);

const dp: number[] = Array(N).fill(1); // 모든 수는 자기 자신 하나로 길이 1

for (let i = 0; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (A[j] < A[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

console.log(Math.max(...dp));
