const input =
`6
10 20 10 30 20 50`.trim().split('\n');

const N = Number(input[0]);
const lines = input[1].split(' ').map(Number);

const LIS: number[] = [];

for (const num of lines) {
  let left = 0;
  let right = LIS.length - 1;
  let pos = LIS.length; // 기본은 맨 뒤에 넣는다


  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(mid)
    if (LIS[mid] >= num) {
      pos = mid;        // num을 대체할 수 있는 위치
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  LIS[pos] = num;
}

console.log(LIS.length);
