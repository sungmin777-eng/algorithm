const input=
`4
1 5 6 7`.trim().split('\n')

const N=Number(input[0])
const lines=input[1].split(' ').map(Number)
const P: number[] = [0];           
for (let i =  1; i <= N; i++) {
  P[i] = Number(lines[i-1]);
  console.log(P)
}

const dp: number[] = Array(N + 1).fill(0);

for (let i=1;i<=N;i++){
    let maxval=0;
    for (let j=1;j<=i;j++){
        maxval=Math.max(maxval,dp[i-j]+P[j])
    }
    dp[i]=maxval
}
console.log(dp[N])