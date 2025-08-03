
const input = 
`4
0 10 15 20
5 0 9 10
6 13 0 12
8 8 9 0`;

const lines = input.trim().split('\n');
const N = parseInt(lines[0], 10);
const W: number[][] = lines
  .slice(1)
  .map(line => line.split(' ').map(n => parseInt(n, 10)));

let answer = Infinity;
const visited: boolean[] = Array(N).fill(false);

// start: 출발 도시 (여기서는 0번)
// curr: 현재 도시
// count: 지금까지 방문한 도시 수
// cost: 누적 비용
function dfs(start: number, cur: number, count: number, cost: number) {
  // 가지치기: 이미 더 크면 의미 없음
  if (cost >= answer) return;

  // 모든 도시 방문 완료
  if (count === N) {
    // 출발지로 돌아올 수 있는지 확인
    if (W[cur][start] > 0) {
      answer = Math.min(answer, cost + W[cur][start]);
    }
    return;
  }

  for (let next = 0; next < N; next++) {
    if (!visited[next] && W[cur][next] > 0) {
      visited[next] = true;
      dfs(start, next, count + 1, cost + W[cur][next]);
      visited[next] = false;
      console.log(next)
    }
  }
}
visited[0] = true;
dfs(0, 0, 1, 0);

console.log(answer);
