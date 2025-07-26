const input=
`5
20 10 35 30 7`.trim().split('\n')

const N=Number(input[0])
const lines=input[1].split(' ').map(Number)

console.log(lines)

lines.sort((a,b)=>a-b)

console.log(lines[0])
console.log(lines[lines.length-1])

const min = Math.min(...lines);
const max = Math.max(...lines);

console.log(max)
