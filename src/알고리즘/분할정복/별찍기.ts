const input = `27`.trim();
const N = Number(input);

const board: string[][] = Array.from({ length: N }, () =>
  Array(N).fill(" ")
);

function drawStar(x: number, y: number, size: number) {
  if (size === 1) {
    board[x][y] = "*";
    return;
  }

  const unit = size / 3;
  for (let dx = 0; dx < 3; dx++) {
    for (let dy = 0; dy < 3; dy++) {
      // 가운데는 비워둠
      if (dx === 1 && dy === 1) continue;
      drawStar(x + dx * unit, y + dy * unit, unit);
    }
  }
}

drawStar(0, 0, N);

// 출력
console.log(board.map((row) => row.join("")).join("\n"));
