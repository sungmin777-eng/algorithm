
const input = [
  '5',
  '1 2',
  '3 4',
  '-1 0',
  '9 8',
  '0 -1'
];

import * as fs from 'fs';

// 입력 처리
const input = fs.readFileSync('/dev/stdin', 'utf-8').trim().split('\n');
const N = Number(input[0]);

// 좌표 배열 생성
const points: [number, number][] = input.slice(1).map(line => {
  const [x, y] = line.split(' ').map(Number);
  return [x, y];
});

// 정렬: x 오름차순, x 같으면 y 오름차순
points.sort((a, b) => {
  if (a[0] !== b[0]) return a[0] - b[0]; // x 기준
  return a[1] - b[1]; // y 기준
});

// 출력
console.log(points.map(([x, y]) => `${x} ${y}`).join('\n'));

const points:[number,number][]=input.slice(1).map(line=>
{const [x,y]= line.split(' ').map(Number)
    return [x,y];
}
);

points.sort((a,b)=>{
    if (a[0] !==b[0]) return a[0]-b[0];
    return a[1]-b[1];
})

console.log(points.map(([x,y])=>`${x} ${y}`).join('\n'));