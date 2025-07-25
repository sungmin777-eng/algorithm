const input = `2
8
3 2 7 8 1 4 5 6
10
2 1 3 4 5 6 7 9 10 8`.trim().split('\n');

const T = Number(input[0]);
let idx = 1;

for (let t = 0; t < T; t++) {
  const N = Number(input[idx++]);
  const permutation = input[idx++].split(' ').map(Number);
  const visited = Array(N + 1).fill(false);
  let cycleCount = 0;

  const dfs = (node: number) => {
    visited[node] = true;
    const next = permutation[node - 1];
    if (!visited[next]) dfs(next);
  };

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      cycleCount++;
    }
  }

  console.log(cycleCount);
  
}
