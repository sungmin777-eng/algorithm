const input = `3
3 2 1`.trim().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let temp = Array(N).fill(0);
let count = 0;

function mergeSort(start: number, end: number): void {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  mergeSort(start, mid);
  mergeSort(mid + 1, end);

  let i = start;
  let j = mid + 1;
  let k = start;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
      count += mid - i + 1; 
    }
  }

  while (i <= mid) temp[k++] = arr[i++];
  while (j <= end) temp[k++] = arr[j++];

  for (let i = start; i <= end; i++) {
    arr[i] = temp[i];
  }
}

mergeSort(0, N - 1);
console.log(count); 
