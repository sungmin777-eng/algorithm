const input=
`7
1 6
6 3
3 5
4 1
2 4
4 7`.trim().split('\n')

const N=+input[0]
const tree=new Map<number,{left:number,right:number}>()

const edges=input.slice(1).map(line=>line.split(' ').map(Number))
const graph=Array.from({length:N+1},()=>[])
for (const [x,y] of edges){
    graph[x].push(y)
    graph[y].push(x)
}

const visited=Array(N+1).fill(false)
console.log(graph)

const result=[]
const parent=Array(N+1).fill(0)
function dfs(node){
    visited[node]=true
    result.push(node)

    for(const next of graph[node]){
        if(!visited[next]){
            parent[next]=node
            dfs(next)
            
        }
    }
}
dfs(1)
console.log(parent.join('\n'))
console.log(result)