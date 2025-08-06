
const input = `
1 0 3
4 2 5
7 8 6
`.trim().split('\n').flatMap(row => row.split(' '));



const start = input.join('').replace(/0/, 'x'); // 빈칸을 'x'로 표현


const goal = '12345678x';


const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

// ✅ 2차원 좌표 → 1차원 인덱스로
function getIndex(x: number, y: number) {
  return x * 3 + y;
}


const visited = new Map<string, number>();
const queue: string[] = [];
let head = 0;

queue.push(start);
console.log(queue)

visited.set(start, 0);
console.log(visited)

while (head < queue.length) {
  const cur = queue[head++];
  const cost = visited.get(cur)!;
  
  const idx = cur.indexOf('x');
  const x = Math.floor(idx / 3);

  const y = idx % 3;

  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];
    if (nx < 0 || ny < 0 || nx >= 3 || ny >= 3) continue;

    const nidx = getIndex(nx, ny);
    const arr = cur.split('');
    
    [arr[idx], arr[nidx]] = [arr[nidx], arr[idx]]; // swap
    const next = arr.join('');
    
    if (!visited.has(next)) {
      visited.set(next, cost + 1);
      queue.push(next);
    }
  }
}

console.log(visited.has(goal) ? visited.get(goal) : -1); // 👉 결과 출력
