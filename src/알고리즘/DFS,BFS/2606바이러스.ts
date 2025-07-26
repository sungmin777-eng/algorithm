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
const stack:number[]=[]

function dfs(v:number,cycle:number[]){
    
    visited[v]=true
    stack.push(v)
    cycle.push(v)

    for(const next of graph[v]){
        if(!visited[next]) {
            dfs(next, cycle)
            

        }
    }
}
let count=0
for(let i=1;i<=N;i++){
    if(!visited[i]){
        const group:number[]=[]
        dfs(i,group)
        count++
        components.push(group);

}
}


console.log(stack)
console.log(count)
console.log(components)