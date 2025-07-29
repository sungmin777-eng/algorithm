const input=
`10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.trim().split('\n')

const arr=input[1].split(' ').map(Number)


const target=input[3].split(' ').map(Number)


arr.sort((a,b)=>a-b)
console.log(arr)

function lowerBound(arr:number[],target:number){
    let left=0;
    let right=arr.length
    
    while(left<right){
        const mid=Math.floor((left+right)/2)

        if(arr[mid]<target) left=mid+1
        else right=mid
    }
    return left
}

function upperBound(arr:number[],target:number){
    let left=0;
    let right=arr.length
    
    while(left<right){
        const mid=Math.floor((left+right)/2)

        if (arr[mid]<=target) left=mid+1
        else right=mid
    }
    return left
}
console.log(lowerBound(arr,2))
console.log(upperBound(arr,2))

const result=target.map(num=>upperBound(arr,num)-lowerBound(arr,num))
console.log(result)