const input = `3 16`.split(" ").map(Number);
const [M, N] = input;

const isPrime = Array(N + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j <= N; j += i) {
      isPrime[j] = false;
    }
  }
}

for (let i = M; i <= N; i++) {
  if (isPrime[i]) {
    console.log(i);
  }
}