const input=`10
1 1 1 0 0 0 0 1 1 1
1 1 1 1 0 0 0 0 1 1
1 0 1 1 0 0 0 0 1 1
0 0 1 1 1 0 0 0 0 1
0 0 0 1 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 1
0 0 0 0 0 0 0 0 0 0
0 0 0 0 1 1 0 0 0 0
0 0 0 0 1 1 1 0 0 0
0 0 0 0 0 0 0 0 0 0`.trim().split('\n')

const N=+input[0]
const edges=input.slice(1).map(line=>line.split(' ').map(Number))

const island=Array.from({length:N},()=>Array(N).fill(0))

const dx=[1,-1,0,0];
const dy=[0,0,1,-1];



let label=1;

function bfs(sx,sy){
    island[sx][sy]=label
    const que:[number,number][]=[[sx,sy]];
    let head=0

    while(head<que.length){
        const [x,y]=que[head++]

        for(let d=0;d<4;d++){
            const nx=x+dx[d]
            const ny=y+dy[d]

            if(nx<0||nx>=10||ny<0||ny>=10) continue

            else if(island[nx][ny]===0&&edges[nx][ny]===1){
                island[nx][ny]=label
                que.push([nx,ny])
            }
        }
    }

}
for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if (island[i][j]===0&&edges[i][j]===1){
            bfs(i,j)
            label++
        }
    }
}
console.log(island)

for (let lbl=1;lbl<label;lbl++){
    const dist=Array.from({length:N,},()=>Array(N).fill(-1))
    const q:[number,number][]=[]

    for(let i=0;i<N;i++){
        for (let j=0;j<N;j++){
            if(island[i][j]===lbl){
                q.push([i,j])
                dist[i][j]=0
            }
        }
    }

        let head=0;
        let answer=1e9;
        while(head<q.length){
            const [x,y]=q[head++]
            for(let d=0;d<4;d++){
                const nx=x+dx[d]
                const ny=y+dy[d]
                if(nx<0||nx>=N||ny<0||ny>=N) continue
                else if(island[nx][ny]===0&&dist[nx][ny]===-1){
                    dist[nx][ny]=dist[x][y]+1
                    q.push([nx,ny])
                }
                else if (island[nx][ny]>0&&island[nx][ny]!==lbl){
                    answer=Math.min(answer,dist[x][y])
                }
            }
            
        }
        console.log(answer)
    }

