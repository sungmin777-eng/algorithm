
const N=1007
const data=Array(N).fill(true)
data[0]=data[1]=false

let count=0;
for( let i=2;i*i<N;i++){
    if(data[i]){
    for (let j=i*i;j<N;j+=i){
        data[j]=false
    }
}
}
for(let i=2;i<N;i++){
    if(data[i]) count++
}
console.log(count)