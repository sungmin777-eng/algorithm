type Connection = {
  switchNum: number;
  bulbIndex: number;
};

function isCross(a: Connection, b: Connection): boolean {
  return (
    (a.switchNum < b.switchNum && a.bulbIndex > b.bulbIndex) ||
    (a.switchNum > b.switchNum && a.bulbIndex < b.bulbIndex)
  );
}

const results: Connection[][] = [];

function dfs(index: number, path: Connection[]) {
  results.push([...path]); // 교차 없는 현재 조합 저장

  for (let next = index + 1; next <= N; next++) {
    const conn: Connection = {
      switchNum: next,
      bulbIndex: switchToBulb[next],
    };

    // 현재 조합의 모든 전선들과 교차하지 않으면 추가
    const isValid = path.every((prevConn) => !isCross(prevConn, conn));

    if (isValid) {
      dfs(next, [...path, conn]);
    }
  }
}

type Connection = {
  switchNum: number;
  bulbIndex: number;
};

function isCross(a: Connection, b: Connection): boolean {
  return (
    (a.switchNum < b.switchNum && a.bulbIndex > b.bulbIndex) ||
    (a.switchNum > b.switchNum && a.bulbIndex < b.bulbIndex)
  );
}

const results: Connection[][] = [];

function dfs(index: number, path: Connection[]) {
  results.push([...path]);

  for (let next = index + 1; next <= N; next++) {
    const conn: Connection = {
      switchNum: next,
      bulbIndex: switchToBulb[next],
    };

    const isValid = path.every((prev) => !isCross(prev, conn));
    if (isValid) {
      dfs(next, [...path, conn]);
    }
  }
}

// 💡 입력 처리 (예시)
const N = 4;
const input = [1, 2, 3, 4]; // B4 ← 1, B3 ← 2, B2 ← 3, B1 ← 4

// 1. 스위치 ↔ 전구 연결 테이블 구성
const switchToBulb = new Array(N + 1);
for (let i = 0; i < N; i++) {
  const bulbIndex = N - i;
  const switchNum = input[i];
  switchToBulb[switchNum] = bulbIndex;
}

// 2. DFS 실행
dfs(0, []);

// 3. 결과 → 비트 배열로 바꾸고 십진수 변환
const binaryResults: number[] = [];

for (const comb of results) {
  const bulbs = Array(N).fill(0);
  for (const conn of comb) {
    bulbs[N - conn.bulbIndex] = 1;
  }

  const binaryStr = bulbs.join('');
  binaryResults.push(parseInt(binaryStr, 2));
}

binaryResults.sort((a, b) => a - b);

// 4. K번째 출력 (1-based)
const K = 6;
console.log(K <= binaryResults.length ? binaryResults[K - 1] : -1);

##전구 문제 직접 타이핑

import * as fs from 'fs';
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');

const N = parseInt(input[0]); // 스위치 & 전구 개수
const inputLine = input[1].split(' ').map(Number); // 전구 B_N~B_1에 연결된 스위치 번호
const K = parseInt(input[2]); // K번째 전구 숫자를 찾기

type Connection = {
  switchNum: number;
  bulbIndex: number;
};

function isCross(a: Connection, b: Connection): boolean {
  return (
    (a.switchNum < b.switchNum && a.bulbIndex > b.bulbIndex) ||
    (a.switchNum > b.switchNum && a.bulbIndex < b.bulbIndex)
  );
}

const switchToBulb:number[]=new Array(N+1).fill(0)
for (let i=0;i<N;i++){
    const bulbIndex=N-i;
    const switchnum=inputLine[i]
    switchToBulb[switchNum] = bulbIndex;
}

const results: Connection[][]:[];
function dfs(index:number, path:Connection[]){
    results.push[...path];

}
