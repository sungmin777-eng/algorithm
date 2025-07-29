const input=` 
4 5 1
1 2
1 3
1 4
2 4
3 4
`

const line=input.split('\n')
const [n,m,v]=line[1].split(' ').map(Number)

const edges = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 4],
  [3, 4],
];

const graph:number[][]=Array.from({length:n+1},()=>[]);
for (const [a,b] of edges){
    graph[a].push(b)
    graph[b].push(a)
    console.log(graph)
}

for (let i=1;i<=n;i++){
    graph[i].sort((a,b)=>a-b)
    console.log(graph)
}

const dfsVisited = Array(n+ 1).fill(false);
const dfsResult: number[] = [];

function dfs(v: number) {
  dfsVisited[v] = true;
  dfsResult.push(v); 
}