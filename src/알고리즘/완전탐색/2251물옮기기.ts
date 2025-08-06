
const [a, b, c] =[8,9,10]

const visited = Array.from(Array(201), () => Array(201).fill(false));
const result = [];

const queue = [[0, 0]];
visited[0][0] = true;

function pour(from, to, toCap) {
  const total = from + to;
  const nextTo = Math.min(toCap, total);
  const nextFrom = total - nextTo;
  return [nextFrom, nextTo];
}

let head = 0;

while (head < queue.length) {
  const [curA, curB] = queue[head++];
  const curC = c - curA - curB;

  if (curA === 0) result.push(curC);

  const states = [];

  // A -> B
  let [na, nb] = pour(curA, curB, b);
  states.push([na, nb]);

  // A -> C
  [na, curC_new] = pour(curA, curC, c);
  nb = curB;
  states.push([na, nb]);

  // B -> A
  [nb, na] = pour(curB, curA, a);
  states.push([na, nb]);

  // B -> C
  [nb, curC_new] = pour(curB, curC, c);
  na = curA;
  states.push([na, nb]);

  // C -> A
  [curC_new, na] = pour(curC, curA, a);
  nb = curB;
  states.push([na, nb]);

  // C -> B
  [curC_new, nb] = pour(curC, curB, b);
  na = curA;
  states.push([na, nb]);

  for (const [nextA, nextB] of states) {
    if (!visited[nextA][nextB]) {
      visited[nextA][nextB] = true;
      queue.push([nextA, nextB]);
    }
  }
}

const answer = Array.from(new Set(result)).sort((a, b) => a - b);
console.log(answer.join(' '));
