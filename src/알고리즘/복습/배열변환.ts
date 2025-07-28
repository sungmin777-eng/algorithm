const flat = [1, 2, 3, 4, 5, 6];
const rows = 3;
const cols = 2;

const matrix: number[][] = [];

for (let i = 0; i < rows; i++) {
  const row = flat.slice(i * cols, i * cols + cols);
  console.log(i*cols)
  matrix.push(row);
}

console.log(matrix)