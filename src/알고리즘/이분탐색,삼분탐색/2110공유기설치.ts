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
    let count = 1;
    let last = houses[0];

    for (let i = 1; i < n; i++) {
        if (houses[i] - last >= dist) {
            count++;
            last = houses[i];
        }
    }

    return count >= c;
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
