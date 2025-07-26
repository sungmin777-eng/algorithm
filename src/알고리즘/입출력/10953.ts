const input=
`5
1,1
2,3
3,4
9,8
5,2`
.trim().split('\n')
const T=Number(input[0])
const lines=input.slice(1).map(line=>line.split(',').map(Number))

for(let i=0;i<T;i++){
    const[x,y]=lines[i]
    console.log(x+y)
}
