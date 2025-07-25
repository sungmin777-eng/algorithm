const input = `2
7
3 1 3 7 3 4 6
8
1 2 3 4 5 6 7 8`;

const lines = input.trim().split('\n');
const T = Number(lines[0]);
let line = 1;

for (let t = 0; t < T; t++) {
  const n = Number(lines[line++]);
  const arr = [0, ...lines[line++].split(' ').map(Number)]; // 1-based 인덱스를 맞추기 위해 앞에 0 추가

  const visited = Array(n + 1).fill(false);
  const finished = Array(n + 1).fill(false);
  let count = 0; // 팀을 이룬 학생 수

  const dfs = (x: number) => {
    visited[x] = true;
    const next = arr[x];

    if (!visited[next]) {
      dfs(next);
    } else if (!finished[next]) {
      // 사이클 발견
      let node = next;
      count++;
      console.log(count)
      while (node !== x) {
        node = arr[node];
        count++;
        console.log(count)
      }
    }

    finished[x] = true;
  };

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i);
  }

  console.log(n - count); // 팀에 속하지 못한 학생 수
}
