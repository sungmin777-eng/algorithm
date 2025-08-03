import { flushSync } from "react-dom"

const input=
`2
3 2
1 3
2 3
4 4
1 2
2 3
3 4
4 2`.trim().split('\n')

const T=+input[0]

let line=1
for (let t=0;t<T;t++){
    const [N,M]=input[line++].split(' ').map(Number)
    console.log(N)
   const edges=Array.from({length:N+1},()=>[])

   for(let i=0;i<M;i++){
    const [x,y] =input[line++].split(' ').map(Number)
        edges[x].push(y)
        edges[y].push(x)
   }
   console.log(edges)

   const color=Array(N+1).fill(-1)
   let isBipartite=true

   function dfs(node:number,c:number){
    color[node]=c

    for (const next of edges[node]){
        if (color[next]===-1) {
            dfs(next,1-c)
            if (!isBipartite) return;    // 하위 호출에서 충돌 발생 시
      }
        else if (color[next] === c) {   // 같은 색 인접 → 충돌
        
        isBipartite = false;
        return;
            }
        }
    }


   for (let i = 1; i <= N; i++) {
    if (color[i] === -1 && isBipartite) {
      dfs(i, 0);
    }
  }

  console.log(isBipartite ? 'YES' : 'NO');
}
