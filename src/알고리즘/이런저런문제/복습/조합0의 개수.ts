const input=`25 12`

const [n,m]=input.split(' ').map(Number);
console.log(n)


function count(n:number,m:number){
let num2=0;
let num5=0;
    for(let i=2;i<=n;i*=2) num2+=Math.floor(n/i);
    for(let i=2;i<=m;i*=2) num2-=Math.floor(m/i);
    for(let i=2;i<=n-m;i*=2) num2-=Math.floor((n-m)/i);
    
    for (let i=5;i<=n;i*=5) num5+=Math.floor(n/i);
    for (let i=5;i<=m;i*=5) num5-=Math.floor(m/i);
    for (let i=5;i<=n-m;i*=5)num5-=Math.floor((n-m)/i);
    
    return(Math.min(num2,num5));
}

console.log(count(n,m))