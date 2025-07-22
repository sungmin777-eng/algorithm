// 최대공약수를 구하는 함수 (유클리드 호제법)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수를 구하는 함수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

// 입력 받기
const [A, B] = '24 18'.split(' ').map(Number);

// 결과 출력
console.log(gcd(A, B));  // 최대공약수 출력
console.log(lcm(A, B)); 

