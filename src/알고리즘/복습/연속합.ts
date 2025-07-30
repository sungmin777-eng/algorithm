const input = `10
10 -4 3 1 5 6 -35 12 21 -1`.trim().split('\n');

const N     = +input[0];
const lines = input[1].split(' ').map(Number);


const dp = new Array(N);


dp[0] = lines[0];
let answer = dp[0];


for (let i = 1; i < N; i++) {

  dp[i] = Math.max(dp[i - 1] + lines[i], lines[i]);
  
  answer = Math.max(answer, dp[i]);
  console.log(answer)
}
console.log(lines)
   console.log(dp)
console.log(answer);