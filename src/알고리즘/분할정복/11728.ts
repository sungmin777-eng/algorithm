
const input = 
`4 3
2 3 5 9
1 4 7`
.toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

const merged = [...A, ...B];
merged.sort((a, b) => a - b);

console.log(merged.join(' '));
