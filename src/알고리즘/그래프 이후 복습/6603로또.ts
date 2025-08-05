const input=
`7 1 2 3 4 5 6 7
8 1 2 3 5 8 13 21 34
0`.trim().split('\n')

let line=0;
for(let t=0;t<input.length;t++){
    const [T,...data]=input[line++].split(' ').map(Number);
    if(T===0) break
    const N=data.length;

    let up=1;
    for(let i=6;i<=N;i++){
        if(N===6) break
         up*=i
    }
    let lo=1;
    for(let i=1;i<=T-N;i++){
        if((T-N)===0) break
         lo*=i
    } 
    
    const sorted=
    
    
}