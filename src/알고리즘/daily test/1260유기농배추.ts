const input=
`2
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
9 6
10 10 1
5 5`.trim().split('\n')

const lines=input.slice(1).map(line=>line.split(' ').map(Number))
const T=Number(input[0])
console.log(lines)


let line = 0;

for (let t = 0; t < T; t++) {
  const [M, N, K] = lines[line++]

  const field = Array.from({ length:N }, () => Array(M).fill(0));
  const visited= Array.from({ length:N }, () => Array(M).fill(false))

  for (let i = 0; i < K; i++) {
    const [x, y] = lines[line++]
    field[y][x] = 1; 
  }

  const dx=[1,-1,0,0];
const dy=[0,0,1,-1];

function isInbound(x:number,y:number):boolean{
    return x>=0 && x<N &&y>=0 && y<M
}

function isHouse(x:number,y:number){
    return field[x][y]===1 && (!visited[x][y])
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

  
}