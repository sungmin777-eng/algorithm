
const N = 6;
const A = [20, 1, 15, 8, 4, 10];

let best = 0;

/**
 * DFS로 순열 생성하며 인접 차이의 합 계산
 * @param K - 고정할 위치 인덱스
 */

function dfs(K: number): void {
  if (K === N) {
    let sum = 0;
    for (let i = 0; i + 1 < N; i++) {
      sum += Math.abs(A[i] - A[i + 1]);
    }
    if (sum > best) best = sum;
    return;
  }
  for (let i = K; i < N; i++) {
    [A[K], A[i]] = [A[i], A[K]];
    dfs(K + 1);
    [A[K], A[i]] = [A[i], A[K]];
    
  }
}

dfs(0);
console.log(best);
