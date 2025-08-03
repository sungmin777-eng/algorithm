let N=1751

let divisor=2

const result=[]

for(let i=0;i*i<N;i++){
while (N%divisor==0){
    N=N/divisor
    result.push(divisor)
}
divisor++
}
console.log(result)
if(N>1) result.push(N)
    console.log(result.join('\n'))