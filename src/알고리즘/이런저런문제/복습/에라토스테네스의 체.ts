const input=`8
20
42
0`
const line=input.split('\n')
const digit:number[]=line.map(Number)
console.log(digit)

const maxDigit=Math.max(...digit)

console.log(maxDigit)

function isPrime(n:number):boolean{
    const arr=Array(n+1).fill(true);
    arr[0]=arr[1]=false;
    for (let i=2;Math.pow(i,2)<=n;i++){
        if(arr[i]) for(let j=i*i;j<=n;j+=i){
            arr[j]=false
        }
    }
    return arr;
}

const Prime=isPrime(maxDigit)

function goldman(n:number,Prime:boolean[]){
    for (let a=3;a<=n/2;a+=2){
        const b=n-a
        if (Prime[a]&&Prime[b])
            return console.log(`${n}=${a}+${b}`)
    }
    return console.log('went wrong');
}
line.array.forEach(num => {
    console.log(`$num`)
    
});
goldman(30,Prime)
    
    

