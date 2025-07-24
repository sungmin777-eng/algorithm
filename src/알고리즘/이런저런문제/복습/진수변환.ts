const input=`17 8
2
2 16`

const line=input.split('\n')
console.log(line)
const[A,B]=line[0].split(' ').map(Number)
const m=Number(line[1])
const digit:number[]=line[2].split(' ').map(Number)

function AtoB(A:number,B:number,m:number,digit:number[]){
let demical=0
for(let i=0;i<m;i++){
    demical+=digit[i]*Math.pow(A,m-1-i)
}
console.log(demical)

const result:number[]=[]
while(demical/B>0){
    result.push(demical%B)
    demical=Math.floor(demical/B)
    console.log(result)
}

return result.reverse()
}
console.log(AtoB(A,B,m,digit))

