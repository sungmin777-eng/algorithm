const input = 
`4 11
802
743
457
539`.trim().split('\n');

const [K, N] = input[0].split(' ').map(Number);
const cables = input.slice(1).map(Number);

let left=1;
let right=Math.max(...cables);
let answer=0;

while(left<=right){
    const mid=Math.floor((left+right)/2)

    let count=0;
    for(const num of cables){
        count+=Math.floor((num/mid))
    }

    if (count>=N){
        answer=mid
        left=mid+1
    }else{
        right=mid-1
    }

}

console.log(answer)