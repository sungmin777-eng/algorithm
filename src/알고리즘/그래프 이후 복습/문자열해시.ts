const input=
`5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink`.trim().split('\n')

const [T,N]=input[0].split(' ').map(Number)
const lines=input.slice(1,1+T)
const queries=input.slice(1+T,N+T+1)
console.log(queries)

const count=new Map<string,number>()

for (const x of lines){
    count.set(x,(count.get(x)||0)+1)
}

const answer=queries.map(num=>count.get(num)||0)
console.log(answer.reduce((acc,cur)=>acc+cur,0))