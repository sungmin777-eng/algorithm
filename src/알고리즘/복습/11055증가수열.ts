const input=
`10
1 100 2 50 60 3 5 6 7 8`.trim().split('\n')

const N=Number(input[0])

console.log(N)

const lines=input[1].split(' ').map(Number)
const dp = lines.slice();//자기 자신만 골라도 값의 합.


const stack:Number[]=[]


for (let i=0;i<N;i++){
    for(let j=0;j<i;j++){
        if(lines[i]>lines[j]) dp[i]=Math.max(dp[i],dp[j]+lines[i])
    }
}
console.log(Math.max(...dp))
