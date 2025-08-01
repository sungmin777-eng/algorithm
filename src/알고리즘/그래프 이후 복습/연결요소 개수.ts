const input=
`6 5
1 2
2 5
5 1
3 4
4 6`.trim().split('\n')
const [N,M]=input[0].split(' ').map(Number)
console.log(M)

const lines=input.slice(1).map(line=>line.split(' ').map(Number))
console.log(lines)
const graph:number[][]=Array.from({length:N+1},()=>[])

for (const [x,y] of lines){
    graph[x].push(y)
    graph[y].push(x)
}
console.log(graph)

const visited=Array(N+1).fill(false)

let count=0
function dfs(node){
    visited[node]=true;
    
        for(const next of graph[node]){
            if (!visited[next]) dfs(next)
            
        }
    }

for(let i=1;i<=N;i++){
    if(!visited[i]){
        dfs(i)
        count++

}
}
console.log(count)