const nums = [1, 2, 3, 4, 2, 1];
const k = 3;

let sum = 0;
for (let i = 0; i < k; i++) sum += nums[i]; console.log(sum)
let maxSum = sum;

for (let i = k; i < nums.length; i++) {
  sum += nums[i] - nums[i - k]; // 윈도우 이동
  console.log(nums[i])
  console.log(nums[i-k])
  console.log(sum)
  maxSum = Math.max(maxSum, sum);
}

console.log(maxSum);