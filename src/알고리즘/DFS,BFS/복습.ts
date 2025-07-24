const input=`6 5
1 2
1 3
2 4
2 5
5 6
`
const lines=input.trim().split('\n')
console.log(lines)
const [n,m]=lines[0].split(' ').map(Number)
console.log(m)
const edges:number[][]=lines.slice(1).map(line => {
    return line.split(' ').map(Number)
    
});;
console.log(edges)

const graph:number[][]=Array.from({length:n+1},()=>[])

for (const [a,b] of edges){
    graph[a].push(b);
    graph[b].push(a);
}

const visited:boolean[]=Array(n+1).fill(false)

function dfs(n:number){
    visited[n]=true

    for (const next of graph[n]){
        if(!visited[next]) dfs(next);
    }
    

}