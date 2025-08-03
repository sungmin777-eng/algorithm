const input=``

const T = Number(input[0]);
let line = 1;

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let t = 0; t < T; t++) {
  
  const [M, N, K] = input[line++].split(' ').map(Number);

 
  const grid: number[][] = Array.from({ length: N },
    () => Array(M).fill(0)
  );
  const visited: boolean[][] = Array.from({ length: N },
    () => Array(M).fill(false)
  );

  
  for (let i = 0; i < K; i++, line++) {
    const [x, y] = input[line].split(' ').map(Number);
    grid[y][x] = 1; 
  }

  
  function dfs(r: number, c: number) {
    visited[r][c] = true;
    for (let d = 0; d < 4; d++) {
      const nr = r + dy[d];
      const nc = c + dx[d];
      
      if (
        nr >= 0 && nr < N &&
        nc >= 0 && nc < M &&
        grid[nr][nc] === 1 &&
        !visited[nr][nc]
      ) {
        dfs(nr, nc);
      }
    }
  }

  
  let answer = 0;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (grid[r][c] === 1 && !visited[r][c]) {
        answer++;
        dfs(r, c);
      }
    }
  }

  console.log(answer);
}
