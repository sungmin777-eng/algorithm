const graph = [
  [],        \
  [2],       
  [1, 3],    
  [2]        
];

const visited = Array(4).fill(false);
const result: number[] = [];

function bfs(start: number) {
  const queue: number[] = [start]; 
  visited[start] = true;

  while (queue.length > 0) {
    const current = queue.shift()!; 
    result.push(current);           

    for (const next of graph[current]) {
      if (!visited[next]) {
        visited[next] = true;       
        queue.push(next);           
      }
    }
  }
}

bfs(1);
console.log(result);