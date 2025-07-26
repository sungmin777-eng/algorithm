const input=
`3
1
2
3`.trim().split('\n')
const T=Number(input[0])
const lines=input.slice(1).map(Number)

let result=0;
for (let i=0;i<T;i++){
    result+=lines[i]   
}
console.log(result)