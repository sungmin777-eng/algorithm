const graph = [
  [],        // 0번은 안 씀
  [2],       // 1번 → 2번
  [1, 3],    // 2번 → 1, 3
  [2]        // 3번 → 2
];

const visited = Array(4).fill(false);
const result: number[] = [];

function bfs(start: number) {
  const queue: number[] = [start]; // 큐에 시작점 넣기
  visited[start] = true;

  while (queue.length > 0) {
    const current = queue.shift()!; // 앞에서 꺼냄
    result.push(current);           // 방문 기록

    for (const next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;       // 방문 표시
        queue.push(next);           // 줄 뒤에 넣기
      }
    }
  }
}

bfs(1);
console.log(result);