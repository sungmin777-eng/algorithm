const input = `3 16`;

const line = input.split(' ').map(Number);
const [m, n] = line;

// 에라토스테네스의 체로 소수 구하기
function sieveOfEratosthenes(limit: number): boolean[] {
    const isPrime = Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= limit; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= limit; j += i) {
                isPrime[j] = false;  // i의 배수들은 소수가 아님
            }
        }
    }
    return isPrime;
}

// 범위 [m, n]에 대한 소수 출력
function printPrimesInRange(m: number, n: number) {
    const isPrime = sieveOfEratosthenes(n);  // 1부터 n까지의 소수 구하기
    for (let i = m; i <= n; i++) {
        if (isPrime[i]) {
            console.log(i);
        }
    }
}

printPrimesInRange(m, n);
