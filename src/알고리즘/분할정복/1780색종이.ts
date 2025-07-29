const input = `
9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1
`.trim().split("\n");

const N = Number(input[0]);
const paper: number[][] = input.slice(1).map(line => line.split(' ').map(Number));

const count = {
  '-1': 0,
  '0': 0,
  '1': 0,
};

function isSame(x: number, y: number, size: number): boolean {
  const first = paper[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (paper[i][j] !== first) return false;
    }
  }
  return true;
}

function countPaper(x: number, y: number, size: number): void {
  if (isSame(x, y, size)) {
    count[paper[x][y]]++;
    return;
  }

  const newSize = size / 3;
  for (let dx = 0; dx < 3; dx++) {
    for (let dy = 0; dy < 3; dy++) {
      countPaper(x + dx * newSize, y + dy * newSize, newSize);
      
    }
  }
}

// 시작
countPaper(0, 0, N);

// 출력
console.log(count["-1"]);
console.log(count["0"]);
console.log(count["1"]);
