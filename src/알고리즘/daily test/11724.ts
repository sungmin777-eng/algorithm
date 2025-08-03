const input=
`6 5
1 2
2 5
5 1
3 4
4 6`.trim().split('\n')

const [N,M]=input[0].split(' ').map(Number)

const edges=input.slice(1).map(line=>line.split(' ').map(Number))

const graph=Array.from({length:N+1},()=>[])

for (const [x,y] of edges){
    graph[x].push(y)
    graph[y].push(x)
}
console.log(graph)
const visited=Array(N+1).fill(false)

function dfs(node){
    let count=1;
    visited[node]=true

    for (const next of graph[node]){
       if (!visited[next]) {
        count+=dfs(next)
       }
    }
    return count
}


const result=[]

for (let i=1;i<=N;i++){
    if (!visited[i]) {
        let component=dfs(i)
        result.push(component)
    }
}

console.log(result)
console.log(result.length)

