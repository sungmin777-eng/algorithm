const input =
`5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`.trim().split('\n');

const N = Number(input[0]);
const cards = input[1].split(' ').map(Number);
const M = Number(input[2]);
const queries = input[3].split(' ').map(Number);


const cardSet = new Set(cards);
console.log(cardSet)

const result: number[] = [];

for (const num of queries) {
  result.push(cardSet.has(num) ? 1 : 0);
}

console.log(result.join(' '));
