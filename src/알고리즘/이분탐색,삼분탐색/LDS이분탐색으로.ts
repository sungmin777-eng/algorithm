const lines=[1, 100, 2, 50, 60, 3, 5, 6, 7, 8];

let tails:number[]=[];

for (const x of lines){
     
    let left=0;
    let right=tails.length;

    while(left<right){
       const mid=(left+right)>>1
        if (tails[mid]>x) left=mid+1
        else right=mid
    }
    if(left===tails.length) tails.push(x)
        else tails[left]=x
    

console.log(tails.length)
console.log(tails)
}

