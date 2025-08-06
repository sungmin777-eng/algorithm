const N = 8; 
let answer = 0;

const cols = Array(N).fill(false);           // 열
const diag1 = Array(2 * N - 1).fill(false);   // ↙ 대각선 (row + col)
const diag2 = Array(2 * N - 1).fill(false);   // ↘ 대각선 (row - col + N - 1)

function backtrack(row: number): void {
  if (row === N) {
    answer++;
    return;
  }

  for (let col = 0; col < N; col++) {
    if (cols[col] || diag1[row + col] || diag2[row - col + N - 1]) continue;

    
    cols[col] = diag1[row + col] = diag2[row - col + N - 1] = true;

    backtrack(row + 1);

    
    cols[col] = diag1[row + col] = diag2[row - col + N - 1] = false;
  }
}

backtrack(0);
console.log(answer);