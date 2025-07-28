// 백준에서 Node.js로 실행 시
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 노드 수
const V = Number(input[0]);
const graph: [number, number][][] = Array.from({ length: V + 1 }, () => []);

for (let i = 1; i <= V; i++) {
  const data = input[i].trim().split(' ').map(Number);
  const from = data[0];

  for (let j = 1; j < data.length - 1; j += 2) {
    const to = data[j];
    const cost = data[j + 1];
    graph[from].push([to, cost]);
  }
}

// DFS 함수
function dfs(start: number): [number, number] {
  const visited = new Array(V + 1).fill(false);
  const dist = new Array(V + 1).fill(0);

  const stack: [number, number][] = [[start, 0]];
  visited[start] = true;

  let farthestNode = start;
  let maxDistance = 0;

  while (stack.length > 0) {
    const [node, acc] = stack.pop()!;
    if (acc > maxDistance) {
      maxDistance = acc;
      farthestNode = node;
    }

    for (const [next, weight] of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        dist[next] = acc + weight;
        stack.push([next, dist[next]]);
      }
    }
  }

  return [farthestNode, maxDistance];
}

// 1. 임의의 노드(1)에서 가장 먼 노드를 찾음
const [farthestFromStart] = dfs(1);

// 2. 그 노드에서 가장 먼 거리 = 트리의 지름
const [, diameter] = dfs(farthestFromStart);

// 결과 출력
console.log(diameter);
