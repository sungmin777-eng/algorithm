const input = `5457
3
6 7 8`.trim().split('\n');

const N = +input[0];
const M = +input[1];
const broken =input[2].split(' ').map(Number);

const isBroken = Array(10).fill(false);
for (const b of broken) {
  isBroken[b] = true;
}


let answer = Math.abs(N - 100);

// 3) 0부터 999999까지 완전 탐색
//    (N ≤ 500,000 이므로 6자리까지 충분히 고려)
for (let channel = 0; channel <= 999999; channel++) {
  const str = String(channel);
  let canPress = true;

  // 이 채널을 누를 수 있는지 확인
  for (const ch of str) {
    if (isBroken[+ch]) {
      canPress = false;
      break;
    }
  }

  if (!canPress) continue;

  // 누르는 횟수 = 자릿수 + 채널 차이만큼 +/– 횟수
  const presses = str.length + Math.abs(N - channel);
  answer = Math.min(answer, presses);
}

console.log(answer);
