const input=
`6 5
1 2
2 5
5 1
3 4
4 6
`.trim().split('\n')

const [N,M]=input[0].split(' ').map(Number);

const edges=input.slice(1).map(line=>line.split(' ').map(Number));

const graph:number[][]=Array.from({length:N+1},()=>[]);
console.log(graph)

const visited:number[]=Array(N+1).fill(false)

for(const [a,b] of edges){
    graph[a].push(b)
    graph[b].push(a)
}
console.log(graph)

function dfs(v:number){
    visited[v]=true;

     for (const next of graph[v]) {
    if (!visited[next]) dfs(next);
  }
} 
let count=0;
for(let i=1;i<=N;i++) {
    if(!visited[i]){
        dfs(i) 
        count++;
    }

}
console.log(count)