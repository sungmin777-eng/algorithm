const input=
`7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.trim().split('\n')

for(let i=0;i<input.length;i++){
    const [N,...data]=input[i].split(' ').map(Number)
    if(N===0)break
}

function back(data:number[],start:number,result:number[]){
    if (result.length===6) return console.log(result)
    
    for(let i=start;i<data.length;i++){
        result.push(data[i])
        back(data,i+1,result)
        result.pop()
    }
}