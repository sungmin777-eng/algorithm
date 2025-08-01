const input=`8
20
42`.trim().split('\n')

const lines=input.map(Number)

console.log(lines)

function isPrime(n:number):boolean{
    const prime=Array(n+1).fill(true)
    prime[0]=prime[1]=false
    for (let i=2;i*i<=n;i++){
        if(prime[i]){
            for(let j=i*i;j<=n;j+=i){
                prime[j]=false
            }
        }
    } 
    return prime;
}




for (const x of lines){

let data=isPrime(x);


function goldbach(n: number) {
  // 짝수 n에 대해 i <= n/2 까지만 검사
  for (let i = 2; i <= n / 2; i++) {
    const j = n - i;
    if (data[i] && data[j]) {
      console.log(`${n} = ${i} + ${j}`);
      return;  
    }
  }
}

goldbach(x)
}