const input=`6 5
1 2
2 5
5 1
3 4
4 6`.trim().split('\n')

const [N,M]=input[0].split(' ').map(Number);
const edges=input.slice(1).map(line=>line.split(' ').map(Number));
const graph=Array.from({length:N+1},()=>[]);
const visited=Array(N+1).fill(false);
console.log(graph)
for( const [x,y] of edges ){
    graph[x].push(y)
    graph[y].push(x)
}

function dfs(node){
    visited[node]=true
    let count=1;

    for (const next of graph[node]){
        if(!visited[next]){
            count+=dfs(next)
        }
    }
    return count
}
const result=[];
for (let i=1;i<=N;i++){
    if(!visited[i]){
        const component=dfs(i);
        result.push(component)
    }
}
console.log(result.length)