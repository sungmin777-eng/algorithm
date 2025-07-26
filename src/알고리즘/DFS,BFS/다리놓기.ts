const input =
`10
1 1 1 0 0 0 0 1 1 1
1 1 1 1 0 0 0 0 1 1
1 0 1 1 0 0 0 0 1 1
0 0 1 1 1 0 0 0 0 1
0 0 0 1 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 1 0 0 0 0
0 0 0 0 1 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0`.trim().split('\n');

const N = Number(input[0]);
const edges = input.slice(1).map(line => line.split(' ').map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

// ✅ 유틸
function isInbound(x: number, y: number): boolean {
  return x >= 0 && x < N && y >= 0 && y < N;
}

function isMovable(x: number, y: number): boolean {
  return isInbound(x, y) && edges[x][y] === 1 && !visited[x][y];
}

// ✅ 1단계: DFS로 섬 라벨링
let islandId = 2; // 섬 번호는 2부터 시작 (1은 원래 값)

function dfs(x: number, y: number, id: number): void {
  visited[x][y] = true;
  edges[x][y] = id;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (isMovable(nx, ny)) {
      dfs(nx, ny, id);
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (isMovable(i, j)) {
      dfs(i, j, islandId++);
    }
  }
}

// ✅ 2단계: 각 섬의 테두리 수집
function getBoundaryPoints(id: number): [number, number][] {
  const points: [number, number][] = [];
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      if (edges[x][y] === id) {
        for (let d = 0; d < 4; d++) {
          const nx = x + dx[d];
          const ny = y + dy[d];
          if (isInbound(nx, ny) && edges[nx][ny] === 0) {
            points.push([x, y]);
            break;
          }
        }
      }
    }
  }
  return points;
}

// ✅ 3단계: BFS로 다른 섬에 도달하는 최소 거리 계산
function bfs(startPoints: [number, number][], fromId: number): number {
  const dist = Array.from({ length: N }, () => Array(N).fill(-1));
  const queue: [number, number][] = [];

  for (const [x, y] of startPoints) {
    dist[x][y] = 0;
    queue.push([x, y]);
  }

  while (queue.length) {
    const [x, y] = queue.shift()!;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (!isInbound(nx, ny)) continue;

      if (edges[nx][ny] !== 0 && edges[nx][ny] !== fromId) {
        return dist[x][y]; // 다른 섬에 도달
      }

      if (edges[nx][ny] === 0 && dist[nx][ny] === -1) {
        dist[nx][ny] = dist[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }

  return Infinity;
}

// ✅ 4단계: 모든 섬에 대해 다리 길이 계산 → 최솟값
let minBridge = Infinity;

for (let id = 2; id < islandId; id++) {
  const boundary = getBoundaryPoints(id);
  const dist = bfs(boundary, id);
  minBridge = Math.min(minBridge, dist);
}

console.log(minBridge);
