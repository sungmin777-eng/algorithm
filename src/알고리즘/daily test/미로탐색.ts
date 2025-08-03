const input=
`4 6
101111
101010
101011
111011`.trim().split('\n')

const [H,W]=input[0].split(' ').map(Number)

const edges=input.slice(1).map(line=>line.split('').map(Number))

const visited=Array.from({length:H},()=>Array(W).fill(false))

const dist=Array.from({length:H},()=>Array(W).fill(0))

const dx=[1,-1,0,0];
const dy=[0,0,1,-1];

function bfs(sx,sy){
    visited[sx][sy]=true
    dist[sx][sy]=1
    const que:[number,number][]=[[sx,sy]]
    let head=0;

    while(head<que.length){
        const [x,y]=que[head++]
        
    for (let d = 0; d < 4; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];
   
    if (
      nx >= 0 && nx < H &&
      ny >= 0 && ny < W &&
      edges[nx][ny] === 1&&!visited[nx][ny]){
        dist[nx][ny]=dist[x][y]+1
        visited[nx][ny]=true
        que.push([nx,ny])
      }
    
    }
}
}
bfs(0,0)
console.log(dist[H-1][W-1])