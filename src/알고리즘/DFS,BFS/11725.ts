const input = `7
1 6
6 3
3 5
4 1
2 4
4 7`.trim().split('\n');

const N = Number(input[0]);
const graph: number[][] = Array.from({ length: N + 1 }, () => []);
const visited: boolean[] = Array(N + 1).fill(false);
const parent: number[] = Array(N + 1).fill(0);

// 인접 리스트 구성
for (let i = 1; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}
console.log(graph)

// DFS로 부모 찾기
function dfs(node: number): void {
  visited[node] = true;

  for (const next of graph[node]) {
    if (!visited[next]) {
      parent[next] = node;
      dfs(next);
    }
  }
}

// 1번 노드를 루트로 시작
dfs(1);

// 결과 출력 (2번 노드부터 N번 노드까지)
for (let i = 2; i <= N; i++) {
  console.log(parent[i]);
}
