const input=
`9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`.trim().split('\n')

const N=Number(input[0])
const [A,B]=input[1].split(' ').map(Number)
const edges=input.slice(3).map(line=>line.split(' ').map(Number))
const graph=Array.from({length:N+1},()=>[])

for (const [a,b] of edges){
    graph[a].push(b)
    graph[b].push(a)
}

console.log(graph)
const visited=Array(N+1).fill(false)

const dist = Array(N + 1).fill(0);

function bfs(start:number){
    const queue:number[]=[start]
    visited[start]=true;
    
    while(queue.length>0){
        const current=queue.shift();
        for (const next of graph[current]){
            if(!visited[next]){
                visited[next]=true;
                dist[next]=dist[current]+1;
                queue.push(next);
                console.log(queue)
            }
        }
    }
}

bfs(A);

console.log(dist[B] > 0 ? dist[B] : (A === B ? 0 : -1));



