const input=`3 16`

const line=input.split(' ').map(Number)
const [m,n]=line

function isprime(n:number):boolean{
    if(n<=1) return false;
    if(n%2===0) return false;
    if(n===2) return true;
    
    for(let i=3;Math.pow(i,2)<=n;i+=2){
        if(n%i===0) return false;
    }

    return true;
}
let primecount=0;
for (let i=m;i<=n;i++){
    if(isprime(i)){
        console.log(i)
    }
}


