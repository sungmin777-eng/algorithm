const rawInput = `
1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
5 5
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0
`.trim().split('\n');

let idx = 0;
const results: number[] = [];


const dx = [-1,  0, 1, -1, 1, -1, 0, 1]; 
const dy = [-1, -1, -1,  0, 0,  1, 1, 1]; 

function isInBounds(x: number, y: number, w: number, h: number): boolean {
  return x >= 0 && x < w && y >= 0 && y < h;
}

function isUnvisitedLand(x: number, y: number, map: number[][], visited: boolean[][]): boolean {
  return map[y][x] === 1 && !visited[y][x];
}

function dfs(
  x: number,
  y: number,
  map: number[][],
  visited: boolean[][],
  w: number,
  h: number
) {
  visited[y][x] = true;

  for (let dir = 0; dir < 8; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    const inside = isInBounds(nx, ny, w, h);
    const valid = inside && isUnvisitedLand(nx, ny, map, visited);

    if (valid) {
      dfs(nx, ny, map, visited, w, h);
    }
  }
}

while (true) {
  const [w, h] = rawInput[idx++].split(' ').map(Number);
  if (w === 0 && h === 0) break;

  const map: number[][] = [];
  for (let i = 0; i < h; i++) {
    map.push(rawInput[idx++].split(' ').map(Number));
  }

  const visited = Array.from({ length: h }, () => Array(w).fill(false));
  let count = 0;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (isUnvisitedLand(x, y, map, visited)) {
        dfs(x, y, map, visited, w, h);
        count++;
      }
    }
  }

  results.push(count);
}

console.log(results.join('\n'));
