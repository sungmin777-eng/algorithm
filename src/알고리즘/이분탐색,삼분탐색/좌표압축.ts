// const input = `5
// 2 4 -10 4 -9`.trim().split('\n');
// const N = Number(input[0]);
// const nums = input[1].split(' ').map(Number);

// // 1. 정렬 + 중복 제거
// const sorted = [...new Set(nums)].sort((a, b) => a - b);
// console.log(sorted)

// // 2. Map에 압축값 저장
// const map = new Map<number, number>();
// sorted.forEach((num, idx) => {
//   map.set(num, idx);
// });

// // 3. 결과 출력
// const result = nums.map(num => map.get(num));
// console.log(result.join(' '));

const input = `5
2 4 -10 4 -9`.trim().split('\n');
const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);

//const lines=nums.sort((a,b)=>a-b)//이건 원본 배열을 정렬해버림
const sorted = [...new Set(nums)].sort((a, b) => a - b);//이게 원본 배열 안건드리고 복사본으로 Set을 통해 중복제거한것.

console.log(nums)

function lowerBound(arr:number[],target:number){
    let left=0;
    let right=arr.length
while(left < right){
const mid=Math.floor((left+right)/2)
if(arr[mid]<target) left=mid+1
else right=mid
}
return left;
}
const result=nums.map(taget=>lowerBound(sorted,taget))

console.log(result)