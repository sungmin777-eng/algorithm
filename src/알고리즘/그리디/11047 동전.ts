const input = `10 4200
1
5
10
50
100
500
1000
5000
10000
50000`.trim().split('\n');

const [NK, ...rest] = input;
const [N, K] = NK.split(' ').map(Number);
const lines = rest.map(Number);


lines.sort((a, b) => b - a);

let remain = K;
console.log(K)
let ans = 0;

for (const coin of lines) {
  if (remain === 0) break;
  const cnt = Math.floor(remain / coin);
  ans += cnt;
  remain -= cnt * coin;
  console.log(ans)
  console.log(remain)
}

console.log(ans);