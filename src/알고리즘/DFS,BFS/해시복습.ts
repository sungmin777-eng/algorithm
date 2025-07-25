const input = `57 2`;

const line = input.split(' ').map(Number);
const [A, P] = line;
console.log('초기값 A:', A);

let current = A;
let idx = 0;

const hash = new Map<number, number>();
const stack: number[] = [];

while (!hash.has(current)) {
  hash.set(current, idx++);
  stack.push(current);

  const digit = String(current).split('').map(Number);
  current = digit.reduce((sum, digit) => sum + digit ** P, 0);
}

console.log('반복 시작 숫자:', current);
console.log('반복 시작 전 수 개수:', hash.get(current)); // 정답


