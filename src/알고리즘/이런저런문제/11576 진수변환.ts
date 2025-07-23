// 입력값 정의
const input = `34 8
2
2 16
`;

// 첫 번째 줄 처리 (A와 B 진법)
const [A, B] = input.split('\n')[0].split(' ').map(Number);

// 두 번째 줄 처리 (자리수)
const m = Number(input.split('\n')[1]);

// 세 번째 줄 처리 (A진법 수의 각 자릿수)
const digits = input.split('\n')[2].split(' ').map(Number);

// 1. A진법 숫자를 10진법으로 변환
let decimalValue = 0;
for (let i = 0; i < m; i++) {
    decimalValue += digits[i] * Math.pow(A, m - 1 - i);  // 각 자릿수에 맞는 가중치를 곱해줌
}

// 2. 10진법 값을 B진법으로 변환하기
if (decimalValue === 0) {
    console.log(0);  // 0인 경우 처리
} else {
    const result: number[] = [];
    while (decimalValue > 0) {
        result.push(decimalValue % B);  // B로 나눈 나머지
        decimalValue = Math.floor(decimalValue / B);  // 몫을 계속 나누기
    }

    // B진법 숫자는 높은 자릿수부터 출력해야 하므로, 결과를 반대로 돌린다
    console.log(result.reverse().join(' '));  // 결과를 반대로 출력
}
