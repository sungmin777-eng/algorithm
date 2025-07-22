function toBaseB(N: number, B: number): string {
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';  // 알파벳 대문자와 숫자
    let result = '';

    // N을 B진법으로 변환
    while (N > 0) {
        let remainder = N % B;  // N을 B로 나눈 나머지
        console.log(`N = ${N}, N % B = ${remainder} (${digits[remainder]})`);  // 나머지와 그에 해당하는 문자 출력
        result = digits[remainder]+result;  // 나머지로 문자를 구하고 앞에 추가
        N = Math.floor(N/B);  // 몫으로 갱신
        console.log(result)
    }
    return result;
}

// 입력 값 (쿼카에서 테스트용)
const input = '60466175 36'; // 테스트 입력 값
const [N,B] = input.split(' ').map(Number); // 공백으로 구분하여 숫자로 변환

// 결과 출력
console.log(toBaseB(N, B));