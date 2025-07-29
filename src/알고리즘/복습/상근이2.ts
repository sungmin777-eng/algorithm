const input=`10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`.trim().split('\n')

const N=Number(input[0])
const test=input[1].split(' ').map(Number)
const K=Number(input[2])
const targets=input[3].split(' ').map(Number)

test.sort((a,b)=>a-b)
console.log(test)

function ValidCounter(arr:number[],target){
    let left=0
    let right=arr.length-1
    let count=1

    while(left<=right){
        let mid=Math.floor((left+right)/2)
        if(arr[mid]===target) return true
        
        else if (arr[mid]<target) left=mid+1
        else right=mid-1
    }
    return false;
}

const answer=targets.map(num=>ValidCounter(test,num)? 1:0);
console.log(answer)
