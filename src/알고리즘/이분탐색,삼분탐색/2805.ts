const input = `4 7
20 15 10 17`.trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const trees = input[1].split(' ').map(Number);

let left = 0;
let right = Math.max(...trees);
let result = 0;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  const total = trees.reduce((sum, height) => {
    return sum + (height > mid ? height - mid : 0);
  }, 0);

  if (total >= M) {
    result = mid; // 조건을 만족하므로 기록하고 더 큰 값 시도
    left = mid + 1;
  } else {
    right = mid - 1; // 조건 미달 → 낮춰야 함
  }
}

console.log(result);
