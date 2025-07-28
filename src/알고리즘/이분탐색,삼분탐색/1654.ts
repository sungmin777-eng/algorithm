
const input = 
`4 11
802
743
457
539`.trim().split('\n');

const [K, N] = input[0].split(' ').map(Number);
const cables = input.slice(1).map(Number);

let left = 1;
let right = Math.max(...cables);
console.log(right)
let answer = 0;

while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    console.log(mid)
    let count = 0;
    for (const cable of cables) {
        count += Math.floor(cable / mid); // mid 길이로 잘랐을 때 몇 개 만들 수 있는지
        
    }

    if (count >= N) {
        // 만들 수 있는 개수가 충분하면 길이를 더 늘릴 수 있음
        answer = mid;
        left = mid + 1;
    } else {
        // 만들 수 있는 개수가 부족함 → 길이를 줄여야 함
        right = mid - 1;
    }
}

console.log(answer);
