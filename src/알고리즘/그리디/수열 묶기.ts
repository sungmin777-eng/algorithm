const input=
`7
-1
-2
3
4
-3
5
1
0
-1
-1
`.trim().split('\n')

const N = Number(input[0]);
const numbers = input.slice(1).map(Number);

let pos: number[] = [];
let neg: number[] = [];
let one = 0;
let zero = 0;
let result = 0;


for (const num of numbers) {
  if (num > 1) pos.push(num);
  else if (num === 1) one++;
  else if (num === 0) zero++;
  else neg.push(num);
}


pos.sort((a, b) => b - a);
neg.sort((a, b) => a - b);


for (let i = 0; i < pos.length; i += 2) {
  if (i + 1 < pos.length) result += pos[i] * pos[i + 1];
  else result += pos[i];
}

for (let i = 0; i < neg.length; i += 2) {
  if (i + 1 < neg.length) result += neg[i] * neg[i + 1];
  else {
    if (zero > 0) zero--; 
    else result += neg[i];
  }
}

result += one;

console.log(result);
