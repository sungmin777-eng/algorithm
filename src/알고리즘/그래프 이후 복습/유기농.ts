const input =
  `2
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6
10 10 1
5 5`.trim().split('\n');

const T = +input[0];
let line = 1;

for (let t = 0; t < T; t++) {
  const [W, H, K] = input[line++].split(' ').map(Number);

  const graph = Array.from({ length: H }, () => Array(W).fill(0));
  const visited = Array.from({ length: H }, () => Array(W).fill(false));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[line++].split(' ').map(Number);
    graph[y][x] = 1;
  }

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  function dfs(sx: number, sy: number): number {
    visited[sx][sy] = true;
    let count = 1;

    for (let d = 0; d < 4; d++) {
      const nx = sx + dx[d];
      const ny = sy + dy[d];

      if (
        nx >= 0 &&
        nx < H &&
        ny >= 0 &&
        ny < W &&
        !visited[nx][ny] &&
        graph[nx][ny] === 1
      ) {
        count += dfs(nx, ny);
      }
    }

    return count;
  }

  const result = [];
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (!visited[i][j] && graph[i][j] === 1) {
        const component = dfs(i, j);
        result.push(component);
      }
    }
  }

  console.log(result.length);
}
