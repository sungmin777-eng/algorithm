const input = [
  '12',
  'Junkyu 50 60 100',
  'Sangkeun 80 60 50',
  'Sunyoung 80 70 100',
  'Soong 50 60 90',
  'Haebin 50 60 100',
  'Kangsoo 60 80 100',
  'Donghyuk 80 60 100',
  'Sei 70 70 70',
  'Wonseob 70 70 90',
  'Sanghyun 70 70 80',
  'nsj 80 80 80',
  'Taewhan 50 60 90'
];

const n=Number(input[0]);
const line:[string,number,number,number]=input.slice(1).map(line=>{
    const [name,ko,eng,cal]=line.split(' ');
    return [name,Number(ko),Number(eng),Number(cal)]
}
)
console.log(line)

line.sort((a,b)=>{
    if (a[1]!==b[1]) return b[1]-a[1];
    else if (a[2] !== b[2]) return a[2]-b[2];
    else if (a[3]!==b[3]) return b[3]-a[3];
    a[0]-b[0]

}
)
console.log(line.map(([name])=>`${name}`).join('\n'))

const n = Number(input[0]);

const line: [string, number, number, number][] = input.slice(1).map(line => {
  const [name, ko, eng, cal] = line.split(' ');
  return [name, Number(ko), Number(eng), Number(cal)];
});

line.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1]; // 국어 내림차순
  if (a[2] !== b[2]) return a[2] - b[2]; // 영어 오름차순
  if (a[3] !== b[3]) return b[3] - a[3]; // 수학 내림차순
  return a[0].localeCompare(b[0]);      // 이름 오름차순
});

console.log(line.map(([name]) => name).join('\n'));
