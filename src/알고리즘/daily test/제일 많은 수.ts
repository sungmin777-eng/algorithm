const input=
`5
1
2
1
2
1`.trim().split('\n')
const N=+input[0]
const map=new Map<number,number>()
const data=input.slice(1).map(Number)
for(const x of data){   
    map.set(x,map.has(x)?(map.get(x)||0)+1:1)
}
console.log(Math.max(...map.values()))