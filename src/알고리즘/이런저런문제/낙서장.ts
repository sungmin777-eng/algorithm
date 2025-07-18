//10989
const input=[5,2,3,5,4,1]
const n=Number(input[0]);
const line=input.slice(1).map(Number);

const result=line.sort((a,b)=>a-b);

console.log(result)

import * as fs from 'fs';

// 입력
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const n = Number(input[0]);

// 1부터 10000까지 개수를 셀 배열
const count = new Array(10001).fill(0);

// 카운팅
for (let i = 1; i <= n; i++) {
  const num = Number(input[i]);
  count[num]++;
}

// 출력
let result = '';
for (let i = 1; i <= 10000; i++) {
  if (count[i] > 0) {
    result += (i + '\n').repeat(count[i]);
  }
}

console.log(result);



