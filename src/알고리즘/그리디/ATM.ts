const input=
`5
3 1 4 3 2`.trim().split('\n')

const N=Number(input[0])

const lines=input[1].split(' ').map(Number).sort((a,b)=>a-b)

let sum=0;   
let total = 0;
let wating = 0;

// for (let i = 0; i < N; i++) {
//   wating += lines[i];
//   total += wating;
//   console.log(wating)
// }

for (let i=0;i<N;i++){
    sum+=(N-i)*lines[i]
}
console.log(sum);