const input = `
3
1234 3412
1000 1
1 16
`.trim().split('\n');

const T = Number(input[0]);
let line = 1;

function DSLR(start: number, end: number): string {
  const visited = Array(10000).fill(false);
  const queue: [number, string][] = [[start, '']];
  let head = 0;
  visited[start] = true;

  while (head < queue.length) {
    const [num, path] = queue[head++];

    if (num === end) return path;

    const D = (num * 2) % 10000;
    const S = num === 0 ? 9999 : num - 1;
    const L = (num % 1000) * 10 + Math.floor(num / 1000);
    const R = (num % 10) * 1000 + Math.floor(num / 10);

    for (const [next, cmd] of [
      [D, 'D'],
      [S, 'S'],
      [L, 'L'],
      [R, 'R'],
    ] as [number, string][]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, path + cmd]);
      }
    }
  }

  return '';
}

for (let t = 0; t < T; t++) {
  const [A, B] = input[line++].split(' ').map(Number);
  const answer = DSLR(A, B);
  console.log(answer);
}
