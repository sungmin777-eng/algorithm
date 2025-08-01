const input=`baekjoon`
const pos = Array<number>(26).fill(-1);

// 2) 문자열을 한 글자씩 살펴보면서
for (let i = 0; i < input.length; i++) {
  const idx = input.charCodeAt(i) - 'a'.charCodeAt(0);  // 'a'→0, 'b'→1, …
  // 아직 기록되지 않은 문자라면 (초기값 -1) 위치를 저장
  if (pos[idx] === -1) {
    pos[idx] = i;
  }
}

// 3) 결과를 공백으로 이어서 한 줄에 출력
console.log(pos.join(' '));