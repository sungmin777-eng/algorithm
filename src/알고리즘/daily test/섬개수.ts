const input = `1 1
0
2 2
0 1
1 0
3 2
1 1 1
1 1 1
5 4
1 0 1 0 0
1 0 0 0 0
1 0 1 0 1
1 0 0 1 0
5 4
1 1 1 0 1
1 0 1 0 1
1 0 1 0 1
1 0 1 1 1
5 5
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0 0 0 0
1 0 1 0 1
0 0`.trim().split('\n');

let line = 0;

while (true) {
  const [W, H] = input[line++].split(' ').map(Number);
  if (W === 0 && H === 0) break; 

  const map: number[][] = [];
  for (let i = 0; i < H; i++) {
    const row = input[line++].split(' ').map(Number);
    map.push(row);

  }
  //2차원 배열 만들고 한 행씩 집어넣으면 간단함.

  const visited=Array.from({length:H},()=>Array(W).fill(false))
  const dx=[1,-1,0,0]
  const dy=[0,0,1,-1]
  
  function bfs(sx,sy){
    visited[sx][sy]=true
    const que:[number,number][]=[[sx,sy]]
    let head=0;
    let count=1;

    while(head<que.length){
        const [x,y]=que[head++]
        console.log(que)
        for(let i=0;i<4;i++){
            const nx=x+dx[i]
            const ny=y+dy[i]

            if(nx>=0&&nx<H&&ny>=0&&ny<W
               &&!visited[nx][ny]&&map[nx][ny]===1 
            ){
                 visited[nx][ny] = true;
                que.push([nx,ny])
                count++
                
            }
        }
    }
    return count;
  }
let component = 0;
const sizes: number[] = [];

for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
    
      const size = bfs(i, j);
      sizes.push(size);   
      component++;        
    }
  }
}

console.log(component);  
console.log(sizes.join('\n'));  
}
