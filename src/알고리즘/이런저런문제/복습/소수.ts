const input=`3 16`.split(' ').map(Number)

const [N,M]=input

function estra(M:number):boolean[]{
    const isPrime=Array(M+1).fill(true)
    isPrime[0]=isPrime[1]=false
    for( let i=2;i*i<=M;i++){
        if (isPrime[i]){
            for (let j=i*i;j<=M;j+=i)
                isPrime[j]=false
        }
    }
    return isPrime;
}
const sprim=estra(M)
for (let i=N;i<=M;i++){
    if(sprim[i]) console.log(i)
}