const input = `
6 4
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 1
`.trim().split('\n');


const [M, N] = input[0].split(' ').map(Number);
const box: number[][] = input.slice(1).map(line => line.split(' ').map(Number));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];


const queue: [number, number][] = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 1) {
      queue.push([i, j]);
      console.log(queue)
    }
  }
}

let front = 0;
while (front < queue.length) {
  const [x, y] = queue[front++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 && nx < N &&
      ny >= 0 && ny < M &&
      box[nx][ny] === 0
    ) {
      box[nx][ny] = box[x][y] + 1;
      queue.push([nx, ny]);
    }
  }
  console.log(front)
}

let maxDay = 0;
let hasUnripe = false;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (box[i][j] === 0) hasUnripe = true;
    maxDay = Math.max(maxDay, box[i][j]);
  }
}

const answer = hasUnripe ? -1 : maxDay - 1;
console.log(answer)
