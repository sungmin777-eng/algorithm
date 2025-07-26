const input=
`1
10 8 17
0 0
1 0
1 1
4 2
4 3
4 5
2 4
3 4
7 4
8 4
9 4
7 5
8 5
9 5
7 6
8 6
9 6`.trim().split('\n')

const T=Number(input[0])
const [M,N,K]=input[1].split(' ').map(Number)
const edges=input.slice(2).map(lines=>lines.split(' ').map(Number))
console.log(edges)
const graph=Array.from({length:N},()=>Array(M).fill(0))
const visited=Array.from({length:N},()=>Array(M).fill(false))

for( const [a,b] of edges){   
    if (graph[b][a]===0) graph[b][a] =1 
}
console.log(graph)

const dx=[1,-1,0,0];
const dy=[0,0,1,-1];

function isInbound(x:number,y:number):boolean{
    return x>=0 && x<N &&y>=0 && y<M
}

function isHouse(x:number,y:number){
    return graph[x][y]===1 && (!visited[x][y])
}

function dfs(x:number,y:number){
    let count=1;
    visited[x][y]=true;

    for(let i=0;i<4;i++){
        const nx=x+dx[i]
        const ny=y+dy[i]
        
        if(isInbound(nx,ny)&&isHouse(nx,ny)){
            count+= dfs(nx,ny)
        }
    }
    return count
}

let result=[]
for(let i=0;i<N;i++){
    for(let j=0;j<M;j++){
        if(isHouse(i,j)){
            console.log(i,j)
        const housecount=dfs(i,j)
        result.push(housecount)
        }
    }
}
console.log(result)
console.log(result.length)