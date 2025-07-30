const input=[6,10,20,30,20,10,30,50];
const N=Number(input[0]);

const lines=input.slice(1);
console.log(lines)
let tail:number[]=[];
for (const x of lines){
    
    let left=0;
    let right=tail.length;

    while(left<right){
        const mid=(left+right)>>1

        if(tail[mid]<x) left=mid+1
        else right=mid
    }
    if(left===tail.length) tail.push(x)
        else tail[left]=x

    console.log(tail)
}