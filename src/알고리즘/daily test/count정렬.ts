const input=
`10
5
2
3
1
4
2
3
5
1
7`.trim().split('\n')


const N=+input[0]
if(N>=10000) throw console.error('입력값이 잘못되었습니다.10000미만의 수를 입력해주세요.');
const data=input.slice(1).map(Number)
const count=Array(N+1).fill(0)

for (let i=0;i<N;i++){
    count[data[i]]++
}
const max=Math.max(...data)
console.log(max)
console.log(count)


const result:number[]=[]
let line=1
for(let i=1;i<=max;i++){
    while(count[i]!==0){
    result.push(i)
    count[i]--
    }
}
console.log(result.join('\n'))



