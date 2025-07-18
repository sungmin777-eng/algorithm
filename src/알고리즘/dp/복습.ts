//N을 1.2로나누기 2.3으로 나누기 3.1을 빼기 이 3개를 활용해 1로 만드는 최소횟수
const N=10
const dp = new Array(N + 1).fill(0);
dp[1] = 0;
for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
}
console.log(dp[N]);

//dp[i]는 i를 1로 만드는 최소횟수. 
// dp[i]=dp[i-1]+1, dp[i]=dp[i/2]+1, dp[i]=dp[i/3]+1 3개를 결국 비교하는것.
// 숫자 4를 생각해보자. dp[1]=0 dp[2]=1 dp[3]=1 4는 Math.min(3+1,3*1+1)로 bottom up 느낌.
//각 조건에 맞는 경우 설정하고 이를 비교해주는 느낌.

//재귀변환 
function operation(n:number){
    if (n === 1) return 0;
  let res = operation(n - 1) + 1;
  if (n % 2 === 0) res = Math.min(res, operation(n / 2) + 1);
  if (n % 3 === 0) res = Math.min(res, operation(n / 3) + 1);
  return res;
}
const out=opertation(10)
console.log(out)

//재귀버전
function minOperations(n: number)  {
  if (n === 1) return 0;

  let result = minOperations(n - 1) + 1;

  if (n % 2 === 0) {
    result = Math.min(result, minOperations(n / 2) + 1);
  }
  if (n % 3 === 0) {
    result = Math.min(result, minOperations(n / 3) + 1);
  }

  return result;
}

function minOperations(n: number): number {
  if (n === 1) return 0;

  let result = minOperations(n - 1) + 1;

  if (n % 2 === 0) {
    result = Math.min(result, minOperations(n / 2) + 1);
  }
  if (n % 3 === 0) {
    result = Math.min(result, minOperations(n / 3) + 1);
  }

  return result;
}

const output = minOperations(10);
console.log(output)

console.log('hello')

//2579 계단오르기 1칸 또는 2칸 올라갈 수 있고 최대합 마지막 칸 무조건 밟기.
//내가 경우의 수를 즉 계단 밟는 경로를 구체적으로 설정해서 모든 case를 포함해주는 방식.

const n=Number(input[0]);
const dp=new Array(n+1).fill(0);
const socre=input.slice(1).map(Number)
socre.unshift(0)

dp[1]=score[1]
dp[2]=score[1]+score[2]

for (let i=3;i<=N;i++){
    dp[i]=Math.max(
        dp[i-2]+score[i],
        dp[i-3]+score[i-1]+score[i]
    )
}
console.log(dp[n])

🧠 2. Top-down 재귀 구조
ts
복사
편집
function maxScore(i: number): number {
  if (i === 1) return score[1];
  if (i === 2) return score[1] + score[2];

  return Math.max(
    maxScore(i - 2) + score[i],
    maxScore(i - 3) + score[i - 1] + score[i]
  );
}
🧠 3. 메모이제이션 붙이기
ts
복사
편집
const memo = new Array(n + 1).fill(-1);

function maxScore(i: number): number {
  if (i === 1) return score[1];
  if (i === 2) return score[1] + score[2];
  if (memo[i] !== -1) return memo[i];

  memo[i] = Math.max(
    maxScore(i - 2) + score[i],
    maxScore(i - 3) + score[i - 1] + score[i]
  );

  return memo[i];
}

//증가하는 수열 중 가장 긴 길이를 구하라. 
6
10 20 10 30 20 50
const arr = [10, 20, 10, 30, 20, 50];
const n = arr.length;
const dp = new Array(n+1).fill(1);
arr.unshift(0)

for (let i = 2; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}
console.log(Math.max(...dp));

const arr = [0, 10, 20, 10, 30, 20, 50]; // 0 추가해서 1-based
const n = arr.length - 1;
const dp = new Array(n + 1).fill(-1);

function lis(i: number): number {
  if (dp[i] !== -1) return dp[i];

  dp[i] = 1; // 자기 자신만 포함하는 경우

  for (let j = 1; j < i; j++) {
    if (arr[j] < arr[i]) {
      dp[i] = Math.max(dp[i], lis(j) + 1);
    }
  }

  return dp[i];
}

// 모든 i에 대해 lis(i) 실행해서 최댓값 찾기
let answer = 0;
for (let i = 1; i <= n; i++) {
  answer = Math.max(answer, lis(i));
}
console.log(answer); 


