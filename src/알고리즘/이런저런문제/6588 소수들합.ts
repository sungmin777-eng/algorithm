// 에라토스테네스의 체 함수 (소수 판별 배열을 한 번에 구함)
function sieveOfEratosthenes(limit: number): boolean[] {
    const isPrime = Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0과 1은 소수가 아님

    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false; // i의 배수들은 소수가 아님
            }
        }
    }

    return isPrime; // 소수 여부 배열 반환
}

// 골드바흐 추측을 검증하는 함수
    function verifyGoldbachConjecture(n: number, isPrime: boolean[]): string {
        for (let a = 3; a <= n / 2; a += 2) {
            const b = n - a;
            if (isPrime[a] && isPrime[b]) {
                return `${n} = ${a} + ${b}`;
            }
        }
        return "Goldbach's conjecture is wrong.";
    }

// 입력값을 직접 설정
const inputs = [8, 20, 42];  // 테스트할 숫자들을 배열로 설정

// 최대값 1,000,000까지의 소수 여부 배열 구하기
const MAX = 1000000;
const isPrime = sieveOfEratosthenes(MAX);

// 결과 출력
inputs.forEach(n => {
    console.log(verifyGoldbachConjecture(n, isPrime));
});
