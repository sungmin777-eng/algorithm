const input=
`2
8
3 2 7 8 1 4 5 6
10
2 1 3 4 5 6 7 9 10 8`.trim().split('\n')

const T=+input[0];

let line=1;
for (let t=0;t<T;t++){
    const N=+input[line++]
    const graph:number[][]=Array.from({length:N+1},()=>[])
    
    const edges=input[line++].split(' ').map(Number)

    for(let i=1;i<=N;i++){
        graph[i].push(edges[i-1])
    }
    console.log(graph)
    const visited=Array(N+1).fill(false)
    const num=[]
    function dfs(node){
        visited[node]=true
        let count=1;
        num.push(node)
        for (const next of graph[node]){
            if (!visited[next]) {
                count+=dfs(next)
            }

        }
return count;
    }
const result=[]
    for( let i=1; i<=N;i++){
        if(!visited[i]){
            let component=dfs(i)
            result.push(component)
        }
    }
    console.log(result.length)
    console.log(num)
}