const fs = require('fs');
const N = Number(fs.readFileSync('/dev/stdin').toString().trim());

for (let i = 1; i <= N; i++) {
  const stars = 2 * i - 1; // 별 개수
  const spaces = N - i;    // 앞 공백 개수
  console.log(' '.repeat(spaces) + '*'.repeat(stars));
}
