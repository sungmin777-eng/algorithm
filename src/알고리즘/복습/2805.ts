const input=
`4 7
20 15 10 17`.trim().split('\n')

const [N,M]=input[0].split(' ').map(Number)

const trees=input[1].split(' ').map(Number)

trees.sort((a,b)=>a-b)
console.log(trees)
let low=0
let high=Math.max(...trees)
let answer=0;

while(low<=high){
    const mid=Math.floor((low+high)/2);
    console.log(mid)

    let meter=0;

    for(const rezidu of trees){
        if(rezidu>mid) {
        meter+= rezidu-mid
        console.log(meter)
        }
    }

    if(meter>=M){
        answer=mid
        low=mid+1
    }else high=mid-1
}
console.log(answer)