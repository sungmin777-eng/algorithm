// const input =
// `4 6
// 101111
// 101010
// 101011
// 111011`.trim().split('\n');

// const [N, M] = input[0].split(' ').map(Number);
// const edges = input.slice(1).map(line => line.split('').map(Number));
// const visited = Array.from({ length: N }, () => Array(M).fill(false));

// const dx = [1, -1, 0, 0];
// const dy = [0, 0, 1, -1];

// function isInbound(x: number, y: number): boolean {
//   return x >= 0 && x < N && y >= 0 && y < M;
// }

// function isMovable(x: number, y: number): boolean {
//   return isInbound(x, y) && edges[x][y] === 1 && !visited[x][y];
// }

// let minDistance = Infinity;

// function dfs(x: number, y: number, dist: number): void {
//   if (x === N - 1 && y === M - 1) {
//     minDistance = Math.min(minDistance, dist);
//     return;
//   }

//   visited[x][y] = true;

//   for (let i = 0; i < 4; i++) {
//     const nx = x + dx[i];
//     const ny = y + dy[i];

//     if (isMovable(nx, ny)) {
//       dfs(nx, ny, dist + 1);
//     }
//   }

//   visited[x][y] = false; // 다른 경로를 위해 되돌아가기
// }

// dfs(0, 0, 1);
// console.log(minDistance);
//-------------------------------------------------

const input = `4 6
101111
101010
101011
111011`.trim().split('\n');


const [N, M] = input[0].split(' ').map(Number);
const edges = input.slice(1).map(line => line.split('').map(Number));


const visited = Array.from({ length: N }, () => Array(M).fill(false));


const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];


function isInbound(x: number, y: number): boolean {
  return x >= 0 && x < N && y >= 0 && y < M;
}

function isMovable(x: number, y: number): boolean {
  return isInbound(x, y) && !visited[x][y] && edges[x][y] === 1;
}

function bfs(x: number, y: number): number {
  const queue: number[][] = [[x,y]];
  visited[x][y] = true;
  console.log(queue)

  while (queue.length) {
    const [x, y] = queue.shift()!;
    
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (!isMovable(nx, ny)) continue;

      visited[nx][ny] = true;
      edges[nx][ny] = edges[x][y] + 1;
      queue.push([nx, ny]);
    }
  }

  return edges[N - 1][M - 1];
}

console.log(bfs(0, 0));

