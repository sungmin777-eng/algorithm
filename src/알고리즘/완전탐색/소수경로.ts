
const input = `3
1033 8179
1373 8017
1033 1033`.trim().split('\n');
const T = +input[0];


const isPrime = Array(10000).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i < 10000; i++) {
  if (isPrime[i]) {
    for (let j = i * i; j < 10000; j += i) {
      isPrime[j] = false;
    }
  }
}

// --- 한 자리 바꾸기 가능한 소수 생성 함수
function getNext(num: number): number[] {
  const result: number[] = [];
  const s = num.toString();

  for (let i = 0; i < 4; i++) {
    for (let d = 0; d <= 9; d++) {
      if (i === 0 && d === 0) continue;
      const arr = s.split('');
      arr[i] = d.toString();
      const next = +arr.join('');
      if (next !== num && isPrime[next]) {
        result.push(next);
      }
    }
  }

  return result;
  
}
//getNext는 전수조사 방식
console.log(getNext(1033))



function bfs(start: number, target: number): string {
  const visited = Array(10000).fill(false);
  const queue: [number, number][] = [[start, 0]];
  visited[start] = true;

  let head = 0; 

  while (head < queue.length) {
    const [cur, steps] = queue[head++]; 
    if (cur === target) return String(steps);

    for (const next of getNext(cur)) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push([next, steps + 1]);
      }
    }
  }

  return 'Impossible';
}


const output: string[] = [];

for (let t = 1; t <= T; t++) {
  const [from, to] = input[t].split(' ').map(Number);
  output.push(bfs(from, to));
}

console.log(output.join('\n'));
