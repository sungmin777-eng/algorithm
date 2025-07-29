const input = `3`; 
const N = Number(input.trim());

let result: string[] = [];
let moveCount = 0;

function hanoi(n: number, from: number, to: number, via: number) {
  if (n === 1) {
    result.push(`${from} ${to}`);
    moveCount++;
    return;
  }

  // 1. N-1개를 from → via로
  hanoi(n - 1, from, via, to);

  // 2. 가장 큰 원판을 from → to로
  result.push(`${from} ${to}`);
  moveCount++;

  // 3. N-1개를 via → to로
  hanoi(n - 1, via, to, from);
}

// 실행
hanoi(N, 1, 3, 2);

// 출력
console.log(moveCount);
console.log(result.join("\n"));
