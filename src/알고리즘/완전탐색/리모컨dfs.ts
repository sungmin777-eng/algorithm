// 1) 기본 세팅은 그대로
const input = `5457
3
6 7 8`.trim().split('\n');
const N = +input[0];
const broken = input[2].split(' ').map(Number);
const isBroken = Array(10).fill(false);
for (const b of broken) isBroken[b] = true;

let answer = Math.abs(N - 100);  // ±만 사용했을 때

// 2) 백트래킹 함수
function dfs(channel: number, length: number) {
  // 2-1) 숫자 + ± 횟수 계산
  const presses = length + Math.abs(channel - N);
  if (presses < answer) answer = presses;

  // 2-2) 최대 6자리까지만 확장
  if (length === 6) return;

  // 2-3) 다음 자리 붙여보기
  for (let d = 0; d <= 9; d++) {
    if (isBroken[d]) continue;
    // 0으로 시작하는 건 허용(0도 한 자리 입력)
    dfs(channel * 10 + d, length + 1);
  }
}

// 3) 첫 호출: 1~9로 시작 (0으로만 이루어진 채널을 따로 보고 싶다면 dfs(0,1) 추가)
for (let d = 1; d <= 9; d++) {
  if (!isBroken[d]) dfs(d, 1);
}

// 4) 결과 출력
console.log(answer);
