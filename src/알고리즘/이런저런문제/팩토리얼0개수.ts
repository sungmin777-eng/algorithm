const input=`101`

const n=Number(input)
console.log(n)
let result=0;

for (let i=5;i<=n;i*=5){
    result+=Math.floor((n/i))
}
console.log(result)