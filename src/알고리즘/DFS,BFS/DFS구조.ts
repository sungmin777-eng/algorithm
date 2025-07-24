const graph = [
  [],        // index 0 (안씀)
  [2, 3],    // 1번 정점 → 2, 3
  [4],       // 2번 정점 → 4
  [],        // 3번 정점 → 없음
  []         // 4번 정점 → 없음
];

const dfsVisited = Array(5).fill(false);
const dfsResult: number[] = [];

function dfs(v: number) {
  dfsVisited[v] = true;
  dfsResult.push(v);
console.log(dfsResult)

  for (const next of graph[v]) {
    if (!dfsVisited[next]) {
      dfs(next);
    }
  }
}

dfs(1);
console.log(dfsResult);