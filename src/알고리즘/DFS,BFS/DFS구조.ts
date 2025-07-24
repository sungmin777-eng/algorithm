const graph = [
  [],        
  [2, 3],    
  [4],       
  [],        
  []         
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