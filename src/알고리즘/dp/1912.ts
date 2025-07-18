const input = `10
10 -4 3 1 5 6 -35 12 21 -1`.trim().split('\n');

const n = Number(input[0]);
        const arr = input[1].split(' ').map(Number);

const dp = new Array(n).fill(0);
dp[0] = arr[0];
let maxSum = dp[0];

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(arr[i], dp[i - 1] + arr[i]);
  maxSum = Math.max(maxSum, dp[i]);
}

console.log(maxSum);

const n=Number(input[0]);
const arr=input[1].split(' ').map(Number)
const dp=new Array.fill(0);
dp[0]=arr[0]
let maxSum=dp[0];//maxSum=dp[0]인 이유 maxSum=0으로 했을 시 음수가 나오면 최대값이 0으로 나오는 오류가 발생. 초기값은 포함해야됨 그리고.

for(let i=1;i<n;i++){
    dp[i]=Math.max(arr[i],arr[i]+dp[i-1])
    maxSum=Math.max(dp[i],arr[i])
}
console.log(maxSum)