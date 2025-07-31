// ✅ 회의실 배정 문제 - Quokka에서 실행 가능

const input = `
11
1 4
3 5
0 6
5 7
3 8
5 9
6 10
8 11
8 12
2 13
12 14
`.trim().split('\n');

const N = Number(input[0]);
const meetings = input.slice(1).map(line => line.split(' ').map(Number));


meetings.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  return a[0] - b[0];
});

let count = 0;
let lastEndTime = 0;

for (const [start, end] of meetings) {
  if (start >= lastEndTime) {
    count++;
    lastEndTime = end;
  }
}

console.log(count);
