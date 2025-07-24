const input = `5
3 4
1 1
1 -1
2 2
3 3`;

const lines=input.split('\n');
const n=Number(lines[0])
console.log(n)

const points: [number, number][] = lines.slice(1).map(line => {
  const [x, y] = line.split(' ').map(Number);
  return [x, y];
});

console.log(points)

points.sort((a,b)=>{
    if (a[0]!==b[0]) return a[0]-b[0]
    else return a[1]-b[1]
}
);

for (const [x,y] of points){
    console.log(x,y);
}


