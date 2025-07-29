const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.trim().split('\n');

const N = Number(input[0]);
const test = input[1].split(' ').map(Number);
const M = Number(input[2]);
const targets = input[3].split(' ').map(Number);

test.sort((a, b) => a - b);

// 이진 탐색: lower bound (target 이상이 처음 등장하는 인덱스)
function lowerBound(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) right = mid;
    else left = mid + 1;
  }
  return left;
  
}

// upper bound (target 초과가 처음 등장하는 인덱스)
function upperBound(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) right = mid;
    else left = mid + 1;
  }
  return left;
}

const result = targets.map(target => {
  const lower = lowerBound(test, target);
  const upper = upperBound(test, target);
  return upper - lower;
});

console.log(result.join(' '));
