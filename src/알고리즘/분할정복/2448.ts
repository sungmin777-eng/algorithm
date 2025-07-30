const N = 24;
const board: string[][] = Array.from({ length: N }, () =>
  Array(2 * N).fill(" ")
);

console.log(board)

function draw(x: number, y: number, size: number) {
  if (size === 3) {
    board[x][y] = "*";
    board[x + 1][y - 1] = "*";
    board[x + 1][y + 1] = "*";
    for (let i = -2; i <= 2; i++) board[x + 2][y + i] = "*";
    return;
  }

  const half = size / 2;
  draw(x, y, half);                        // 위
  draw(x + half, y - half, half);         // 아래 왼쪽
  draw(x + half, y + half, half);         // 아래 오른쪽
}

draw(0, N - 1, N);


console.log(board.map(row => row.join("")).join("\n"));
