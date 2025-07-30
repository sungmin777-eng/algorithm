// const input=`6
// 10 30 10 20 20 10`.trim().split('\n')

// const lines=input[1].split(' ').map(Number);

// const N=Number(input[0])

// const dp=lines.slice().fill(1)

// for (let i=0;i<N;i++){
//     for(let j=0;j<i;j++){
//         if(lines[i]<lines[j]) dp[i]=Math.max(dp[i],dp[j]+1)
//     }
// }
// console.log(dp[N-1])

const input=`6
10 30 10 20 20 10`.trim().split('\n')
const lines=input[1].split(' ').map(Number);

const N=Number(input[0]);

const sorted=[...lines].sort((a,b)=>a-b)



let stack:number[]=[]

function lowerBound(arr:number[],target:number){

    let left=0

    let right=lines.length

    while(left<right){
    const mid=Math.floor((left+right)/2)
    if(arr[mid]<target) left=mid+1
    else right=mid
    
}
return {
    left
    stack.push(arr[left])
}
}

const result=lines.map(num=>lowerBound(sorted,num))
console.log(stack.length)



