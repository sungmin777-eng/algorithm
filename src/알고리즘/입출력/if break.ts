const input=
`1 1
2 3
3 4
9 8
0 0
5 2
0 0`.trim().split('\n')

let line=0;
console.log(input)
const lines=input.slice(0).map(line=>line.split(' ').map(Number))
console.log(lines)

for(let i=0;i<lines.length;i++){
const[x,y]=lines[i]
if (x===0&&y===0) break;
console.log(x+y)
}
