// Quokka.js용 코드 – 수열에서 반복되기 전까지의 원소 개수 구하기

const A = 57;
const P = 2;

const sequence: number[] = [];
const visited = new Map<number, number>(); // 숫자 → 등장 순서 인덱스
console.log(visited)

let current = A;
let idx = 0;

while (!visited.has(current)) {
  visited.set(current, idx++);
  sequence.push(current);

  // 다음 수 계산
  const digits = String(current).split('').map(Number);
  current = digits.reduce((sum, digit) => sum + digit ** P, 0);
  console.log(current)
}

const result = visited.get(current); // 반복 시작 인덱스가 곧 남는 수열 개수
console.log('초기 수열:', sequence);
console.log('반복 시작 숫자:', current);
console.log('반복 시작 전 수 개수:', result); // 최종 정답
