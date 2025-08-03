
const input = `7
0110100
0110101
1110101
0000111
0100000
0111110
0111000`.trim().split('\n');
const N = +input[0];
const map: number[][] = input.slice(1).map(line => line.split('').map(Number));

const visited: boolean[][] = Array.from({ length: N }, () => Array(N).fill(false));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(si: number, sj: number): number {
  const queue: [number, number][] = [[si, sj]];
  let head = 0;
  visited[si][sj] = true;
  let count = 1;

  while (head < queue.length) {
    const [i, j] = queue[head++];
    for (let d = 0; d < 4; d++) {
      const ni = i + dx[d];
      const nj = j + dy[d];
      console.log(queue)
      if (
        ni >= 0 && ni < N &&
        nj >= 0 && nj < N &&
        !visited[ni][nj] &&
        map[ni][nj] === 1
      ) {
        visited[ni][nj] = true;
        count++;
        queue.push([ni, nj]);
      }
    }
  }
  return count;
}

const component: number[] = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      component.push(bfs(i, j));
    }
  }
}

const result = [component.length, ...component.sort((a, b) => a - b)];
console.log(result.join('\n'));
