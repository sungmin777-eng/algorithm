const input=['3',
'21 Junkyu',
'21 Dohyun',
'20 Sunyoung'
]

const n=Number(input[0])
const line:[number]=input.slice(1).map(line=>{
    const [x]=line.split(' ').map(Number)
    return [x];
}
)
console.log(line)

const members: [number, string][] = input.slice(1).map(line => {
  const [ageStr, name] = line.split(' ');
  return [Number(ageStr), name];

}
)
console.log(members)

members.sort((a, b) => a[0] - b[0]);

// 출력
console.log(members.map(([age, name]) => `${age} ${name}`).join('\n'));