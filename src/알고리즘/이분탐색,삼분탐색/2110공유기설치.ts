const input = `5 3
1
2
8
4
9`.trim().split('\n');

const [n, c] = input[0].split(' ').map(Number);
const houses = input.slice(1).map(Number).sort((a, b) => a - b);

let left = 1;
let right = houses[houses.length - 1] - houses[0];
let answer = 0;

function canInstall(dist: number): boolean {
    let count = 1;            // 첫 번째 집에는 무조건 공유기 설치
    let last = houses[0];     // 마지막으로 공유기 설치한 집의 위치

    for (let i = 1; i < n; i++) {
        if (houses[i] - last >= dist) {
            count++;                // dist 이상 떨어져 있으면 설치
            last = houses[i];      // 마지막 설치 위치 갱신
            console.log(count);    // 디버깅용 출력
        }
    }

    return count >= c;        // 공유기를 c개 이상 설치할 수 있는지 여부
}

while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (canInstall(mid)) {
        answer = mid;
        left = mid + 1; // 더 큰 거리 탐색
    } else {
        right = mid - 1; // 거리를 줄여야 함
    }
}

console.log(answer);
