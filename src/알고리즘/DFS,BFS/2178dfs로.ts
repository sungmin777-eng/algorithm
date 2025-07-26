const input=
`4 6
101111
101010
101011
111011
`.trim().split('\n')


const [N,M]=input[0].split(' ').map(Number)

const edges=input.slice(1).map(lines=>lines.split('').map(Number))
console.log(edges)
const visited=Array.from({length:N},()=>Array(M).fill(false))
console.log(visited)

const dx=[1,-1,0,0];
const dy=[0,0,1,-1];
function path(x:number,y:number):boolean{
   return edges[x][y]===1&& (!visited)
}

function isHouese(x:number,y:number):boolean{
   return x>=0&&x<M&&y>=0&&y<N
}

function dsf(x:number,y:number){
    visited[y][x]=true
    let count=1;

    for(let i=0;i<4;i++){
        const nx=x+dx[i];
        const ny=y+dy[i];

        if(path(nx,ny)&&isHouese(nx,ny)){
            count+=dfs(nx,ny)
        }
    }
return count;
}
let result=[]
for(let i=0;i<M;i++){
    for( let j=0;j<;j++){
        if(path(i,j)){
            const housecount=dfs(i,j)
            result.push(housecount)
        }
    }
}

console.log(result)