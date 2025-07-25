const input = `
3
110
010
001
`.trim().split('\n');

const N = Number(input[0]);
const map = input.slice(1).map(line => line.split('').map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));
const dx = [0, 0, -1, 1]; 
const dy = [-1, 1, 0, 0]; 
const result: number[] = [];

function isInBounds(x: number, y: number): boolean {
  return x >= 0 && x < N && y >= 0 && y < N;
}

function isHouseAndUnvisited(x: number, y: number): boolean {
  return map[x][y] === 1 && !visited[x][y];
}

function dfs(x: number, y: number): number {
  visited[x][y] = true;
  console.log(`방문: (${x}, ${y})`);
  let count = 1;

  for (let dir = 0; dir < 4; dir++) {
    const nx = x + dx[dir];
    const ny = y + dy[dir];

    if (isInBounds(nx, ny)) {
      console.log(` → 검사: (${nx}, ${ny}) → 값: ${map[nx][ny]}, 방문여부: ${visited[nx][ny]}`);
    }

    if (isInBounds(nx, ny) && isHouseAndUnvisited(nx, ny)) {
      count += dfs(nx, ny);
    }   
  }

  return count;
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (isHouseAndUnvisited(i, j)) {
      console.log(`\n📌 새 단지 시작: (${i}, ${j})`);
      const houseCount = dfs(i, j);
      console.log(`✅ 단지 끝 (크기 ${houseCount})`);
      result.push(houseCount);
    }
  }
}

result.sort((a, b) => a - b);
console.log(`\n🔢 총 단지 수: ${result.length}`);
console.log(`🏘 각 단지 크기: ${result.join(', ')}`);
