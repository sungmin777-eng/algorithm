
const input = `6 4
1 -1 0 0 0 0
0 -1 0 0 0 0
0 0 0 0 -1 0
0 0 0 0 -1 1`.trim().split('\n');
const [W, H] = input[0].split(' ').map(Number);

const box: number[][] = [];
for (let i = 1; i <= H; i++) {
  box.push(input[i].split(' ').map(Number));
}



const visited: boolean[][] = Array.from({ length: H }, () => Array(W).fill(false));
const dist: number[][] = Array.from({ length: H }, () => Array(W).fill(0));
const que: [number, number][] = [];


for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (box[i][j] === 1) {
      que.push([i, j]);
      visited[i][j] = true;
      console.log(que)
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let head = 0;


while (head < que.length) {
  const [x, y] = que[head++];
  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];
    if (
      nx >= 0 && nx < H &&
      ny >= 0 && ny < W &&
      box[nx][ny] === 0
    ) {
      box[nx][ny] = 1;
      visited[nx][ny] = true;
      dist[nx][ny] = dist[x][y] + 1;
      que.push([nx, ny]);
      
      console.log(que)
    }
  }
}


let maxDays = 0;
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (box[i][j] === 0) {
      maxDays = -1;
      break;
    }
    maxDays = Math.max(maxDays, dist[i][j]);
  }
  if (maxDays === -1) break;
}

console.log(maxDays)
