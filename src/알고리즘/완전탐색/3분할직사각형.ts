const input=
`3 3
123
456
789
`.trim().split('\n')
const [N,M]=input[0].split(' ').map(Number)
const A=input.slice(1).map(line=>line.split('').map(Number))

// 1) 2D 누적합 배열 P 계산 (1-based)
const P = Array.from({ length: N + 1 }, () => Array(M + 1).fill(0));
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= M; j++) {
    P[i][j] =
      A[i - 1][j - 1] +
      P[i - 1][j] +
      P[i][j - 1] -
      P[i - 1][j - 1];
      console.log(P)
  }
  
}

// (r1,c1)~(r2,c2) 구간 합을 0-based로 반환
function rectSum(r1, c1, r2, c2) {
  return (
    P[r2 + 1][c2 + 1] -
    P[r1][c2 + 1] -
    P[r2 + 1][c1] +
    P[r1][c1]
  );
}

let answer = 0;

// 2) 6가지 분할 패턴 전수 조사

// 패턴 1: 세로로 3조각
for (let i = 1; i <= M - 2; i++) {
  for (let j = i + 1; j <= M - 1; j++) {
    const s1 = rectSum(0, 0, N - 1, i - 1);
    const s2 = rectSum(0, i, N - 1, j - 1);
    const s3 = rectSum(0, j, N - 1, M - 1);
    answer = Math.max(answer, s1 * s2 * s3);
  }
}

// 패턴 2: 가로로 3조각
for (let i = 1; i <= N - 2; i++) {
  for (let j = i + 1; j <= N - 1; j++) {
    const s1 = rectSum(0, 0, i - 1, M - 1);
    const s2 = rectSum(i, 0, j - 1, M - 1);
    const s3 = rectSum(j, 0, N - 1, M - 1);
    answer = Math.max(answer, s1 * s2 * s3);
  }
}

// 패턴 3: 왼쪽 세로 → 오른쪽 가로 분할
for (let i = 1; i <= M - 1; i++) {
  for (let j = 1; j <= N - 1; j++) {
    const s1 = rectSum(0, 0, N - 1, i - 1);
    const s2 = rectSum(0, i, j - 1, M - 1);
    const s3 = rectSum(j, i, N - 1, M - 1);
    answer = Math.max(answer, s1 * s2 * s3);
  }
}

// 패턴 4: 오른쪽 세로 → 왼쪽 가로 분할
for (let i = 1; i <= M - 1; i++) {
  for (let j = 1; j <= N - 1; j++) {
    const s1 = rectSum(0, i, N - 1, M - 1);
    const s2 = rectSum(0, 0, j - 1, i - 1);
    const s3 = rectSum(j, 0, N - 1, i - 1);
    answer = Math.max(answer, s1 * s2 * s3);
  }
}

// 패턴 5: 상단 가로 → 하단 세로 분할
for (let i = 1; i <= N - 1; i++) {
  for (let j = 1; j <= M - 1; j++) {
    const s1 = rectSum(0, 0, i - 1, M - 1);
    const s2 = rectSum(i, 0, N - 1, j - 1);
    const s3 = rectSum(i, j, N - 1, M - 1);
    answer = Math.max(answer, s1 * s2 * s3);
  }
}

// 패턴 6: 하단 가로 → 상단 세로 분할
for (let i = 1; i <= N - 1; i++) {
  for (let j = 1; j <= M - 1; j++) {
    const s1 = rectSum(i, 0, N - 1, M - 1);
    const s2 = rectSum(0, 0, i - 1, j - 1);
    const s3 = rectSum(0, j, i - 1, M - 1);
    answer = Math.max(answer, s1 * s2 * s3);
  }
}

console.log(answer);