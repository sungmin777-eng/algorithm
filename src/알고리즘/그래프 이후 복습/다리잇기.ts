const input=`10
1 1 1 0 0 0 0 1 1 1
1 1 1 1 0 0 0 0 1 1
1 0 1 1 0 0 0 0 1 1
0 0 1 1 1 0 0 0 0 1
0 0 0 1 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 1 0 0 0 0
0 0 0 0 1 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0`.trim().split('\n')

const N = +input[0];
const A: number[][] = input.slice(1).map(line => line.split(' ').map(Number));

// 1) 섬 레이블링
const island = Array.from({ length: N }, () => Array(N).fill(0));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let label = 1;

function labelBFS(sx: number, sy: number) {
  const q: [number, number][] = [[sx, sy]];
  island[sx][sy] = label;
  let head = 0;
  while (head < q.length) {
    const [x, y] = q[head++];
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d], ny = y + dy[d];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (A[nx][ny] === 1 && island[nx][ny] === 0) {
        island[nx][ny] = label;
        q.push([nx, ny]);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (A[i][j] === 1 && island[i][j] === 0) {
      labelBFS(i, j);
      label++;
    }
  }
}
console.log(island)

// 2) 다리 놓기 BFS
let answer = Infinity;

for (let lbl = 1; lbl <= label; lbl++) {
  const dist = Array.from({ length: N }, () => Array(N).fill(-1));
  const q: [number, number][] = [];

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (island[i][j] === lbl) {
        dist[i][j] = 0;
        q.push([i, j]);
        console.log(q)
      }
    }
  }

  let head = 0;
  while (head < q.length) {
    const [x, y] = q[head++];
    if (dist[x][y] >= answer) continue;
    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d], ny = y + dy[d];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (A[nx][ny] === 0 && dist[nx][ny] === -1) {
        dist[nx][ny] = dist[x][y] + 1;
            
        q.push([nx, ny]);
      } else if (island[nx][ny] >= 1 && island[nx][ny] !== lbl) {
        answer = Math.min(answer, dist[x][y]);
      }
    }
  }
}

console.log(answer);