const input = `6 5
1 2
2 5
5 1
3 4
4 6`;

const lines = input.trim().split('\n');
const [N, M] = lines[0].split(' ').map(Number);
const edges = lines.slice(1).map(line => line.split(' ').map(Number));


const graph: number[][] = Array.from({ length: N + 1 }, () => []);
for (const [u, v] of edges) {
  graph[u].push(v);
  graph[v].push(u);
  console.log(graph)
}


const visited = Array(N + 1).fill(false);


function dfs(v: number) {
  visited[v] = true;
  for (const next of graph[v]) {
    if (!visited[next]) dfs(next);
  }
}

let count = 0;
for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);     
    count++;    
  }
}

console.log(count); 
