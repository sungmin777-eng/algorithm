const input = `4 4
3 2 1 4
4 1 4 4
5 1 4 4
1 2 3 4`.trim().split('\n');

const [R, C] = input[0].split(' ').map(Number);
const map = input.slice(1).map(line => line.split(' ').map(Number));
const result: string[] = [];

function traverseOddRow() {
  for (let i = 0; i < R; i++) {
    result.push(i % 2 === 0 ? 'R'.repeat(C - 1) : 'L'.repeat(C - 1));
    if (i !== R - 1) result.push('D');
  }
}

function traverseOddCol() {
  for (let j = 0; j < C; j++) {
    result.push(j % 2 === 0 ? 'D'.repeat(R - 1) : 'U'.repeat(R - 1));
    if (j !== C - 1) result.push('R');
  }
}

function traverseEvenEven() {
  // 가장 작은 (i+j)%2 == 1 셀 찾기
  let min = 1001;
  let skipY = 0, skipX = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if ((i + j) % 2 === 1 && map[i][j] < min) {
        min = map[i][j];
        skipY = i;
        skipX = j;
        console.log(min)
        console.log(skipY)
        console.log(skipX)
      }
    }
  }

  let y = 0;
  while (y < R) {
    if (y === skipY || y + 1 === skipY) {
      let x = 0;
      while (x < C) {
        if (x === skipX - (skipY % 2 === 0 ? 0 : 1)) {
          result.push('D', 'R', 'U');
          x++;
        } else {
          result.push(x % 2 === 0 ? 'R' : 'L');
          x++;
        }
      }
      y += 2;
    } else {
      result.push('R'.repeat(C - 1), 'D', 'L'.repeat(C - 1));
      if (y + 2 < R) result.push('D'); // 마지막 줄이면 D 없음
      y += 2;
    }
  }
}

if (R % 2 === 1) {
  traverseOddRow();
} else if (C % 2 === 1) {
  traverseOddCol();
} else if (R === 2 && C === 2) {
  result.push(map[0][1] < map[1][0] ? 'RD' : 'DR');
} else {
  traverseEvenEven();
}

console.log(result.join(''));
