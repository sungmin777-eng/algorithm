const input: string = require('fs').readFileSync(0, 'utf-8').trim();

// 암호화 결과를 담을 변수
let result = '';

// 입력받은 문자열을 한 글자씩 처리
for (let i = 0; i < input.length; i++) {
    let char = input[i];

    // 대문자 ROT13
    if (char >= 'A' && char <= 'Z') {
        char = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26) + 'A'.charCodeAt(0));
    }
    // 소문자 ROT13
    else if (char >= 'a' && char <= 'z') {
        char = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + 13) % 26) + 'a'.charCodeAt(0));
    }

    // 암호화된 문자를 결과에 추가
    result += char;
}

// 최종 결과 출력
console.log(result);







const input: string = require('fs').readFileSync(0, 'utf-8').trim();

let result = '';

for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char >= 'A' && char <= 'Z') {
        char = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + 13) % 26) + 'A'.charCodeAt(0));
    }
    else if (char >= 'a' && char <= 'z') {
        char = String.fromCharCode(((char.charCodeAt(0) - 'a'.charCodeAt(0) + 13) % 26) + 'a'.charCodeAt(0));
    }

    result += char;
}

console.log(result);