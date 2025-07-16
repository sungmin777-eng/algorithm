const fs = require('fs');

const input: string[] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T: number = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [A, B]: number[] = input[i].split(' ').map(Number);
  console.log(A + B);
}
console.log(3,3)
