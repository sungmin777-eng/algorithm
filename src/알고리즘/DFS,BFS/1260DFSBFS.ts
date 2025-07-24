// DFS와 BFS 기본 그래프 탐색 (Quokka 실행용)

// 정점 수, 간선 수, 시작 정점
const N = 4;
const M = 5;
const V = 1;

// 간선 목록 (양방향)
const edges = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
];

// 인접 리스트 만들기
const graph: number[][] = Array.from({ length: N + 1 }, () => []);
for (const [a, b] of edges) {
  graph[a].push(b);
  graph[b].push(a); // 양방향
}

// 정점 번호가 작은 순서대로 방문하기 위해 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// ✅ DFS 구현 (재귀)
const dfsVisited = Array(N + 1).fill(false);
const dfsResult: number[] = [];

function dfs(v: number) {
  dfsVisited[v] = true;
  dfsResult.push(v);

  for (const next of graph[v]) {
    if (!dfsVisited[next]) {
      dfs(next);
    
    }
  }
}

// ✅ BFS 구현 (큐)
const bfsVisited = Array(N + 1).fill(false);
const bfsResult: number[] = [];

function bfs(start: number) {
  const queue: number[] = [start];
  bfsVisited[start] = true;

  while (queue.length > 0) {
    const current = queue.shift()!;
    bfsResult.push(current);

    for (const next of graph[current]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }
}

// 실행
dfs(V);
bfs(V);

// 결과 출력
console.log('DFS:', dfsResult.join(' '));
console.log('BFS:', bfsResult.join(' '));
