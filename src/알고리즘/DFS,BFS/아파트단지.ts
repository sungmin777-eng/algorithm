const input=
`7
0110100
0110101
1110101
0000111
0100000
0111110
0111000
`.trim().split('\n')
const N=Number(input[0]);
const edges=input.slice(1).map(lines=>lines.split('').map(Number));

const visited=Array.from({length:N},()=>Array(N).fill(false))
console.log(visited)
const dx=[0,0,1,-1];
const dy=[1,-1,0,0];


function isInbound(x:number,y:number):boolean{
  
    return x>=0 && x<N && y>=0&&y<N

}
function isHouse(x:number,y:number):boolean{
    return edges[x][y] === 1&& !visited[x][y]

}
console.log(isInbound(1,1))
console.log(isHouse(0,0))

function dfs(x:number,y:number){
    visited[x][y]=true
    let count=1;

    for( let i=0;i<4;i++){
        const nx=x+dx[i]
        const ny=y+dy[i]    
    
    if(isInbound(nx,ny)&&isHouse(nx,ny)){
        count+=dfs(nx,ny)
    }

    }
return count
}
const result=[]
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (isHouse(i, j)) {
      const housecount = dfs(i, j);
      result.push(housecount);

    }
  }
}
console.log(result)
