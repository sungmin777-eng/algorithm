const input=
`5 5 3
5 4
5 2
1 2
3 4
3 1`.trim().split('\n')

const [N,M,V]=input[0].split(' ').map(Number)

const edges=input.slice(1).map(line=>line.split(' ').map(Number))
console.log(edges)
const graph=Array.from({length:N+1},()=>[])
graph.sort((a,b)=>a-b)
for (const [x,y] of edges){
    graph[x].push(y)
    graph[y].push(x)
}
const visited=Array(N+1).fill(false)

const dfsResult: number[] = [];
function dfs(node:number){
    visited[node]=true
    dfsResult.push(node)

    for(const next of graph[node]){
        if(!visited[next]) dfs(next)
    }
    
}
const bfsResult=[]

function bfs(start:number){
    const queue:number[]=[start]
    visited[start]=true
    
    while(queue.length>0){
        const current=queue.shift()
        bfsResult.push(current)
        for(const next of graph[current])
        if(!visited[next]){
        visited[next]=true
        queue.push(next)
        }
    }
    
}
dfs(V)
console.log(dfsResult) /
visited.fill(false) // 두 개 같이 쓸거면 배열2개 만드는게 편함, 노드찍히는 위치 왜 그런지 생각.
bfs(V)
console.log(bfsResult)