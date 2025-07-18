
const input = [
  '5',
  '1 2',
  '3 4',
  '-1 0',
  '9 8',
  '0 -1'
];

const line:[number,number][]=input.slice(1).map(line=>{
    const [x,y]=line.split(' ').map(Number)
    return [x,y];
}

);
console.log(line)

line.sort((a,b)=>{
    if (a[1] !== b[1]) return a[1]-b[1];
    return a[0]-b[0];
}
)
console.log(line.map(([x, y]) => `${x} ${y}`).join('\n'));