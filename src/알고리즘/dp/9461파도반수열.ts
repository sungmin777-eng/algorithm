const input = fs.readFileSync('/dev/stdin').toString().trim();
const T = Number(input[0]);
let line=1
for (let i=1;i<=T;i++){
const n=Number(input[line++])  
const dp=new Array(n+1).fill(0)  
dp[1]=dp[2]=dp[3]=1
dp[4]=dp[5]=2
for (let i=6;i<=n;i++){
dp[i]=dp[i-1]+dp[i-5]
}
console.log(dp[n])

}

import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);
const testCases = input.slice(1).map(Number);
const MAX = Math.max(...testCases);

// dp 배열 생성 및 초기값 설정
const dp: number[] = new Array(MAX + 1).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;
dp[4] = 2;
dp[5] = 2;

// 점화식 적용
for (let i = 6; i <= MAX; i++) {
  dp[i] = dp[i - 1] + dp[i - 5];
}

// 테스트케이스 결과 출력
for (let i = 0; i < T; i++) {
  const N = testCases[i];
  console.log(dp[N]);
}

const T = Number(input[0]); 
const testCases = input.slice(1).map(Number)
const MAX=Math.max(...testCases);
const dp:number[]=new Array(MAX+1).fill(0);
dp[1]=1;
dp[2]=2;
dp[3]=3;
dp[4]=4;
dp[5]=5;

for (let i=6; i<T; i++){
    console.log(dp[testCases[i]])
}
// //🤔 그러면... 왜 굳이 MAX까지만?
// → 100개 테스트케이스 중 N이 가장 큰 게 20이라면 dp[1] ~ dp[20]만 있으면 충분하니까
// 불필요하게 dp[100]까지 안 만들어도 되도록 최적화하는 거예요.


const [_, ...testcases] = (
	require("fs").readFileSync("/dev/stdin").toString().trim() as string
).split("\n").map(Number);

const padoban = [0, 1, 1, 1, 2, 2];
const answers: number[] = [];

for (const N of testcases) {
	if (padoban[N]) {
		answers.push(padoban[N]);
		continue;
	}

	for (let i = padoban.length; i <= N; i++) {
		padoban[i] = padoban[i - 1] + padoban[i - 5];
	}

	answers.push(padoban[N]);
}

console.log(answers.join("\n"));