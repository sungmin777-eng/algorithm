const input=`5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`.toString().trim().split('\n')

const N=Number(input[0]);
const test=input[1].split(' ').map(Number)
test.sort((a,b)=>a-b)

const K=Number(input[2])
const targets=input[3].split(' ').map(Number)

function isVaild(arr:number[],target):boolean{
    let left=0
    let right=arr.length-1

    while(left<=right){
        const mid=Math.floor((left+right)/2)
        if(arr[mid] === target) return true
        else if (arr[mid]<target) left=mid+1
        else right=mid-1
    }
    return false;
}
console.log(targets.map(num=>isVaild(test,num)? 1:0))


