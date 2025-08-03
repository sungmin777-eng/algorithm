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



let lable=1;

function bfs(sx,sy){

    island[sx][sy]=lable
    const que:[number,number][]=[[sx,sy]]
    let head=0;
    

    while(head<que.length){
        const [x,y]=que[head++]
        for(let i=0;i<4;i++){
            const nx=x+dx[i]
            const ny=y+dy[i]

            if(nx>=0&&nx<N&&ny>=0&&ny<N&&edges[nx][ny]===1&&island[nx][ny]===0){
                island[nx][ny]=lable
                que.push([nx,ny])
            }
        }
    }
}
for(let i=0;i<N;i++){
    for(let j=0;j<N;j++){
        if(edges[i][j]===1&&island[i][j]===0){
            bfs(i,j)
            lable++
        }
    }
}


let answer=Infinity

for(let lbl=1;lbl<lable;lbl++){
    const dist=Array.from({length:N},()=>Array(N).fill(-1))
    const q:[number,number][]=[]
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(island[i][j]===lbl){
                q.push([i,j])
                dist[i][j]=0
            }
        }
    }
    let header=0;
    while(header<q.length){
        const[a,b]=q[header++]
        if (dist[a][b] >= answer) continue

        for(let d=0;d<4;d++){
            const na=a+dx[d]
            const nb=b+dy[d]
            if(na >= 0 && na < N &&nb >= 0 && nb<N ){
            if(edges[na][nb]===0&&dist[na][nb]===-1){
                dist[na][nb]=dist[a][b]+1
                q.push([na,nb])
            }
            else if(island[na][nb]>=1&&island[na][nb]!==lbl){
                answer=Math.min(answer,dist[a][b])
            }
        }
            
        }
        

    }
    
}
console.log(answer)