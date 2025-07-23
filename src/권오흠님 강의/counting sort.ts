function countingSort(arr: number[], maxValue: number): number[] {
  const count: number[] = new Array(maxValue + 1).fill(0); // 카운트 배열
  const output: number[] = new Array(arr.length); // 결과 배열

  // 1. 각 숫자의 개수 세기
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  console.log(count)

  // 2. 누적 합 배열 만들기 (stable 정렬 위해)
  for (let i = 1; i <= maxValue; i++) {
    count[i] += count[i - 1];
  }
  console.log(count)

  // 3. 출력 배열 만들기 (뒤에서부터 → 안정성 유지)
  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    const pos = count[current] - 1;
    output[pos] = current;
    count[current]--;

  }
 
  return output;
}
const input = [2, 5, 3, 0, 2, 3, 0, 3];
const sorted = countingSort(input, 5);
console.log(sorted); 

