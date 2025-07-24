const input=`10`

const n=Number(input.split(' '))

console.log(n)
const array=new Array(2).fill(1)

for (let i=1;i<=n;i++){
    array[1]=array[1]*i
}
console.log(array[1])