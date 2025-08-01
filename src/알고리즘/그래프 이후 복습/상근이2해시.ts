const input = `10
6 3 2 10 10 10 -10 -10 7 3
8
10 9 -5 2 3 4 5 -10`
  .trim().split('\n');

const cards   = input[1].split(' ').map(Number);
const queries = input[3].split(' ').map(Number);


const count=new Map<number,number>()

for (let x of cards){
    count.set(x,(count.get(x)||0)+1)
    console.log(count)
}

const answer=queries.map(num=>count.get(num)||0)

console.log(answer.join(' '))
