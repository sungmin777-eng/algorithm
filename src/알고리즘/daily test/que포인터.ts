
type Graph = number[][];

// 예제 그래프 (1번부터 5번 노드)
// 1 ── 2
// │    │
// 3    4
// │
// 5
const N = 5;
const edges: Graph = Array.from({ length: N + 1 }, () => []);
edges[1].push(2, 3);
edges[2].push(1, 4);
edges[3].push(1, 5);
edges[4].push(2);
edges[5].push(3);

const visited: boolean[] = Array(N + 1).fill(false);

function bfs(start: number) {
  const queue: number[] = [start];
  let head = 0;
  visited[start] = true;


  while (head < queue.length) {
    const current = queue[head++];
    for (const next of edges[current]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
        
      }
    }
  }

  console.log(`\n최종 queue: [${queue.join(', ')}]`);
}

bfs(1);
