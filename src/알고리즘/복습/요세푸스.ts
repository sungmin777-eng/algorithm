const input=`7 3`.trim().split(' ').map(Number)
const [N,M]=input
let result:number[]=[]
for (let i=1;i<=N;i++){
  result.push(i)
}
console.log(result)

let answer:number[]=[]
let idx=0;
while (result.length>0){
  idx=(idx+M-1)%result.length
  answer.push(result.splice(idx,1)[0])
  console.log(result)
  console.log(idx)
}
console.log(answer) 

