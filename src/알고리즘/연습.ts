const N=10
const dp =new Array(N+1).fill(0)

for (let i=2; i<=N; i++){
    dp[i]=dp[i-1]+1


if (i%2 === 0) {
    dp[i]= Math.min(dp[i],dp[i/2]+1)
}
if (i%3===0){
    dp[i]=Math.min(dp[i],dp[i/3]+1)
}
}
console.log(dp[10])
// 📌 Quokka에서는 stdin이 없기 때문에 N을 직접 입력해야 해
const N = 10; // ← 여기에 원하는 숫자 직접 입력

const dp = new Array(N + 1).fill(0);

for (let i = 2; i <= N; i++) {
  dp[i] = dp[i - 1] + 1;

  if (i % 2 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  }

  if (i % 3 === 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }
}

console.log(`dp[${N}] =`, dp[N]);     // ✅ 정답 출력
console.log('전체 dp 배열:', dp);      // ✅ 중간 계산 과정 확인도 가능!

const dp:number[]=new Array.fill(0)

dp[1]=1
dp[2]=3
if (n%2=0) {dp[n]=3}
else dp[n]=2

for (let i=3;i)

    const dp[1][j]=1;
    for (let i=0;i<=9;i++){
        for (let j=0;j<=9;j++){
             while parsetint('0'.repeat(2))<=2{
        dp[i][j]=dp[i][j-1]+dp[i-1][j]
}
    }
   
    }

const dp:number=Array.from({length(N+1)},()=>new Array(10).fill(0))

for(let j=0;j<=9;j++){
    dp[1][j]=1
}

for (let i=2;i<=9;i++){
    for(let j=1;j<=9;j++){
        dp[i][j]=(dp[i][j-1]+dp[i-1][j])%mod 10007
    }
}
const answer=dp(N).reduece((sum,val)=>(sum+val)%mod)
console.log(answer)


const mod=10007
const dp:number[][]=Array.from({length:N+1},()=>new Array(10).fill(0))

for(j=1;j<=9;j++){
    dp[1][j]=1
}

for(i=1;i<=N;i++0){
    if (j === 9) {dp[i[j]=dp[i][j-1]]}
    for(j=0;j<=8;j++){
        dp[i][j]=(dp[i][j-1]+dp[i][j+1])%mod
    }
    
}
const answer=dp(N).reduce((sum,val)=>(sum+val),0)
console.log(answer)
