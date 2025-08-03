const [N, P] = `57 2`.trim().split(' ').map(Number);

const seq = [];
let cur = N;

while (true) {
  seq.push(cur);

  const digits = String(cur).split('').map(Number);
  const next = digits.reduce((sum, d) => sum + Math.pow(d, P), 0);

  const firstIdx = seq.indexOf(next);
  if (firstIdx !== -1) {
    console.log(firstIdx);
    break;
  }

  cur = next;
  console.log(cur)
}
