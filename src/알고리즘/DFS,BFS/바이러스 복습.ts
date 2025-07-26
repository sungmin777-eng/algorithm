const input=
`7
6
1 2
2 3
1 5
5 2
5 6
4 7
`.trim().split('\n')

const N=Number(input[0]);
const M=Number(input[1]);

const edges:numer[][]=input.slice(2).map(lines=>lines.split(' ').map(Number));

const graph:number[][]=Array.from({length:N+1},()=>[]);

const components:number[][]=[]

graph.sort((a,b)=>a-b)
for (const [a,b] of edges){
    graph[a].push(b)
    graph[b].push(a)
}

console.log(graph)

const visited=Array(N+1).fill(false);

function dfs(v:number){
    let count=1;
    visited[v]=true
    

    for(const next of graph[v]){
        if(!visited[next]) {
            
            count+=dfs(next)
            
        }
    }
    return count;
}



const infected=dfs(1)-1
console.log(infected)
