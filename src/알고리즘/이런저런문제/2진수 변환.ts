function binaryToOctal(binary: string): string {
    // 먼저, 3비트씩 묶어야 하므로, 앞에 0을 채워서 3의 배수 길이가 되도록 맞춥니다.
    while (binary.length % 3 !== 0) {
        binary = '0' + binary;
    }

    let result = '';
    
    // 3비트씩 끊어서 8진수로 변환
    for (let i = 0; i < binary.length; i += 3) {
        const threeBits = binary.slice(i, i + 3);  // 3비트씩 잘라서
        result += parseInt(threeBits, 2).toString(8);  // 2진수 -> 8진수로 변환
    }

    // 결과에서 앞의 0을 제거
    return result.replace(/^0+/, '');
}

// 입력 받기
const input = '11001100';  // 예시 입력

// 8진수로 변환
console.log(binaryToOctal(input));


function octalToBinary(octal: string): string {
    // 8진수를 2진수로 변환한 뒤, 앞의 0을 제거
    let binary = '';

    // 각 8진수 자리를 3비트의 2진수로 변환
    for (let i = 0; i < octal.length; i++) {
        // 8진수 숫자를 2진수로 변환
        binary += parseInt(octal[i], 8).toString(2).padStart(3, '0');
    }

    // 앞의 0을 제거하고 결과 반환
    return binary.replace(/^0+/, '');
}

// 입력 받기
const input = '314';  // 예시 입력

// 8진수를 2진수로 변환하고 출력
console.log(octalToBinary(input));