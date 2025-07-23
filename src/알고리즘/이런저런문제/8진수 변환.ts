function octalToBinary(octal: string): string {
    // 8진수를 2진수로 변환한 뒤, 앞의 0을 제거
    let binary = '';

    // 각 8진수 자리를 3비트의 2진수로 변환
    for (let i = 0; i < octal.length; i++) {
        // 8진수 숫자를 2진수로 변환
        binary += parseInt(octal[i], 8).toString(2).padStart(3, '0');
    }

    // 앞의 0을 제거하고 결과 반환
    return binary.replace(/^0+/,'')
}

// 입력 받기
const input = '314';  // 예시 입력

// 8진수를 2진수로 변환하고 출력
console.log(octalToBinary(input));